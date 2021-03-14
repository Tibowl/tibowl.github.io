/**
 * CONFIG
 * */
const configDetails = {
    columns: {
        title: "Amount of columns",
        type: "number",
        min: 1,
        max: 30,
        default: 12,
    },
    imageSize: {
        title: "Image size",
        type: "number",
        min: 32,
        max: 256,
        default: 96,
    },
    fontSize: {
        title: "Font size",
        type: "number",
        min: 4,
        max: 64,
        default: 20,
    },
    smallFontSize: {
        title: "Smaller font size",
        type: "number",
        min: 4,
        max: 64,
        default: 12,
    },
    rankFontSize: {
        title: "Rank font size",
        type: "number",
        min: 4,
        max: 64,
        default: 24,
    },
    starFontSize: {
        title: "Star font size",
        type: "number",
        min: 4,
        max: 64,
        default: 24,
    },
    ueFontSize: {
        title: "UE level font size",
        type: "number",
        min: 4,
        max: 64,
        default: 18,
    },
    drawAll: {
        title: "Draw all (including missing) characters",
        type: "checkbox",
        default: true,
    },
    displayName: {
        title: "Display name",
        type: "checkbox",
        default: true,
    },
    displayRank: {
        title: "Display rank",
        type: "checkbox",
        default: true,
    },
    displayStars: {
        title: "Display stars",
        type: "checkbox",
        default: true,
    },
    displayUE: {
        title: "Display UE Lv.",
        type: "checkbox",
        default: true,
    },
    bgColor: {
        title: "Background color",
        type: "text",
        default: "#FFFFFFFF",
    },
    sort1: {
        title: "Primary sorting",
        type: "select",
        options: ["Name ↑", "Name ↓", "Rank ↓", "Rank ↑", "Stars ↓", "Stars ↑", "UE Level ↓", "UE Level ↑"],
        default: 0,
    },
    sort2: {
        title: "Secondary sorting",
        type: "select",
        options: ["Name ↑", "Name ↓", "Rank ↓", "Rank ↑", "Stars ↓", "Stars ↑", "UE Level ↓", "UE Level ↑"],
        default: 2,
    },
    sort3: {
        title: "Ternary sorting",
        type: "select",
        options: ["Name ↑", "Name ↓", "Rank ↓", "Rank ↑", "Stars ↓", "Stars ↑", "UE Level ↓", "UE Level ↑"],
        default: 4,
    }
}
const config = {
    columns: 12,
    imageSize: 96,
    fontSize: 18,
    smallFontSize: 12,
    rankFontSize: 24,
    starFontSize: 24,
    ueFontSize: 24,
    drawAll: true,
    displayName: true,
    displayRank: true,
    displayStars: true,
    displayUE: true,
}
Object.entries(configDetails).forEach(([id, settings]) => {
    const label = document.createElement("label")
    label.innerText = settings.title
    label.for = id
    document.getElementById("config").appendChild(label)

    let input
    if (settings.type == "select") {
        input = document.createElement("select")

        for (const opt of settings.options) {
            const option = document.createElement("option")
            option.text = opt
            input.appendChild(option)
        }

        input.selectedIndex = settings.default
    } else {
        input = document.createElement("input")
        input.type = settings.type
        input.min = settings.min
        input.max = settings.max
        input.value = settings.default
        input.checked = settings.default
    }
    input.id = id
    input.onchange = updateConfig
    input.onchange(input)
    document.getElementById("config").appendChild(input)

    document.getElementById("config").appendChild(document.createElement("br"))
})

function updateConfig() {
    const id = this.id

    if (configDetails[id].type == "number")
        config[id] = +this.value
    if (configDetails[id].type == "text")
        config[id] = this.value
    if (configDetails[id].type == "checkbox")
        config[id] = !!this.checked
    if (configDetails[id].type == "select")
        config[id] = this.selectedIndex

    if (updateOutput)
        updateOutput()
}

/**
 * IMAGE GENERATION
 * */
function onBgLoad() {
    this.isLoaded = true
    if (this.callback) this.callback()
}
document.getElementById("bg").onload = onBgLoad
document.getElementById("bg").src = "./list/bg.png"

function toggleOutput(c) {
    imageOutputEnabled = c
    updateOutput()
    document.getElementById("enableOutput").style = imageOutputEnabled ? "display:none;" : ""
    document.getElementById("disableOutput").style = !imageOutputEnabled ? "display:none;" : ""
}
toggleOutput(false)

const fontFamilyName = `"ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",Osaka, "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif`
const fontFamilyNumbers = '"Helvetica Neue", Helvetica, Arial, sans-serif'
async function updateOutput() {
    imageID++
    const currentID = imageID

    /** @type {HTMLCanvasElement} */
    const output = document.getElementById("output")
    const context = output.getContext("2d")

    if (!isReady || !imageOutputEnabled) return output.height = 0

    let chars = Object
        .entries(charStats)
        .map(([id, { stars, rank, uelevel }]) => { return { id, stars, rank, name: hashlist[id].name, uelevel } })
        .filter(k => k.stars > 0 || config.drawAll)
        .sort((a, b) => {
            const compares = [
                a.name.localeCompare(b.name),
                b.rank - a.rank,
                b.stars - a.stars,
                b.uelevel - a.uelevel
            ]

            for (const sorter of ["sort1", "sort2", "sort3"]) {
                const sorting = config[sorter]
                const compared = compares[Math.floor(sorting / 2)]
                if (compared !== 0)
                    return (sorting % 2 == 0 ? 1 : -1) * compared
            }
            return a.id - b.id
        })

    console.log("Rendering", config, chars)

    const columns = config.columns
    const rows = Math.ceil(chars.length / columns)

    const imageSize = config.imageSize
    let [width, height] = [imageSize + 8, imageSize + 8]
    if (config.displayName)
        height += config.fontSize + config.smallFontSize + 2
    output.width = width * columns
    output.height = height * rows + 50

    const bg = document.getElementById(`bg`)
    if (!bg.isLoaded)
        await new Promise((resolve) => bg.callback = resolve)

    if (currentID !== imageID) return

    context.fillStyle = config.bgColor
    context.fillRect(0, 0, output.width, output.height)

    const pattern = context.createPattern(bg, "repeat")
    context.fillStyle = pattern
    context.fillRect(0, 0, output.width, output.height)

    const rankCount = [], starCount = []
    for (const ind in chars) {
        const char = chars[ind]
        const x = ind % columns, y = Math.floor(ind / columns)
        const img = document.getElementById(`img-${char.id}`)

        if (!img.isLoaded)
            await new Promise((resolve) => img.callback = resolve)

        if (currentID !== imageID) return

        /** @type {HTMLCanvasElement} */
        const scrap = document.getElementById("scrap")
        const chr = scrap.getContext("2d")

        scrap.width = width
        scrap.height = height

        chr.drawImage(img, 0, 0, 128, 128, width / 2 - imageSize / 2, 1, imageSize, imageSize)
        // Grayscale
        if (char.stars == 0) {
            const imageData = chr.getImageData(width / 2 - imageSize / 2, 1, imageSize, imageSize)
            const data = imageData.data
            for (let i = 0; i < data.length; i += 4) {
                const luma = data[i + 0] * 0.2126 + data[i + 1] * 0.7152 + data[i + 2] * 0.0722
                data[i + 0] = data[i + 1] = data[i + 2] = luma
            }
            chr.putImageData(imageData, width / 2 - imageSize / 2, 1)
        }

        chr.shadowColor = "#222"
        chr.shadowOffsetX = 1
        chr.shadowOffsetY = 1
        chr.shadowBlur = 1

        if (config.displayName) {
            const [top, bottom] = char.name.split("（")
            let fontSize = config.fontSize
            chr.textAlign = "center"
            chr.font = `800 ${fontSize}px ${fontFamilyName}`
            chr.fillStyle = "#000"

            while (chr.measureText(top).width > (width - 4) && fontSize-- > 4)
                chr.font = `800 ${fontSize}px ${fontFamilyName}`

            chr.fillText(top, width / 2, imageSize + 1 + Math.round((fontSize + config.fontSize) / 2))

            if (bottom) {
                let smallFontSize = config.smallFontSize
                chr.font = `800 ${smallFontSize}px ${fontFamilyName}`
                while (chr.measureText(bottom).width > (width - 4) && smallFontSize-- > 4)
                    chr.font = `800 ${smallFontSize}px ${fontFamilyName}`
                chr.fillText(`（${bottom}`, width / 2, imageSize + 6 + fontSize + Math.round((smallFontSize + config.smallFontSize) / 2))
            }
        }

        if (char.rank > 0 && config.displayRank) {
            chr.font = `700 ${config.rankFontSize}px ${fontFamilyNumbers}`
            chr.fillStyle = getRankColor(char.rank)
            chr.strokeStyle = "#000"
            chr.lineWidth = 3
            chr.shadowBlur = 2
            chr.textAlign = "right"
            chr.strokeText(`R${char.rank}`, width / 2 + imageSize / 2 - 3, imageSize - 3)
            chr.fillText(`R${char.rank}`, width / 2 + imageSize / 2 - 3, imageSize - 3)
        }

        if (char.uelevel > 0 && config.displayUE) {
            chr.font = `700 ${config.ueFontSize}px ${fontFamilyNumbers}`
            chr.fillStyle = "#FFFFFF"
            chr.strokeStyle = "#000"
            chr.lineWidth = 3
            chr.shadowBlur = 2
            chr.textAlign = "left"
            chr.strokeText(`UE Lv.${char.uelevel}`, width / 2 - imageSize / 2 + 3, config.ueFontSize + 2)
            chr.fillText(`UE Lv.${char.uelevel}`, width / 2 - imageSize / 2 + 3, config.ueFontSize + 2)
        }

        if (char.stars > 0 && config.displayStars) {
            chr.font = `700 ${config.starFontSize}px ${fontFamilyNumbers}`
            chr.fillStyle = getStarColor(char.stars)
            chr.strokeStyle = "#000"
            chr.lineWidth = 3
            chr.shadowBlur = 2
            chr.textAlign = "left"
            chr.strokeText(`${char.stars}\u2605`, width / 2 - imageSize / 2 + 3, imageSize - 3)
            chr.fillText(`${char.stars}\u2605`, width / 2 - imageSize / 2 + 3, imageSize - 3)
        }
        rankCount[char.rank] = (rankCount[char.rank] || 0) + 1
        starCount[char.stars] = (starCount[char.stars] || 0) + 1

        const xOff = x * width, yOff = y * height
        context.drawImage(scrap, xOff, yOff)
    }

    context.textAlign = "left"
    context.font = `800 20px ${fontFamilyName}`
    context.fillStyle = "#000"
    context.strokeStyle = "#000"
    context.lineWidth = 3

    context.shadowColor = "#222"
    context.shadowOffsetX = 2
    context.shadowOffsetY = 2
    context.shadowBlur = 2

    let currentX = 5
    if (config.displayStars)
        for (let i = starCount.length - 1; i > 0; i--) {
            const count = `${i}\u2605: ${starCount[i] || 0}`
            context.fillStyle = getStarColor(i)
            context.strokeText(count, currentX, height * rows + 20)
            context.fillText(count, currentX, height * rows + 20)
            currentX += context.measureText(count).width + 20
        }

    currentX = 5
    if (config.displayRank)
        for (let i = rankCount.length - 1; i > 0; i--) {
            if (i < rankCount.length - 5 || !rankCount[i]) continue

            const count = `R${i}: ${rankCount[i]}`
            context.fillStyle = getRankColor(i)
            context.strokeText(count, currentX, height * rows + 43)
            context.fillText(count, currentX, height * rows + 43)
            currentX += context.measureText(count).width + 15
        }

    context.textAlign = "right"
    context.fillStyle = "#000000"
    context.fillText(`${chars.filter(k => k.stars > 0).length}/${Object.keys(hashlist).length}`, width * columns - 5, height * rows + 23)

    context.font = `800 15px ${fontFamilyName}`
    context.fillText("Made with PrincessConnect List Maker", width * columns - 5, height * rows + 43)
}

function getStarColor(stars) {
    if (stars >= 6) return "#FFABD3"
    return "#FDE77E"
}
function getRankColor(rank) {
    if (rank >= 18) return "#FE4854"
    if (rank >= 11) return "#C382FD"
    if (rank >= 7) return "#FDDC63"
    if (rank >= 4) return "#BBCBD9"
    if (rank >= 2) return "#E7926B"
    return "#5595F4"
}
isReady = true
updateOutput()