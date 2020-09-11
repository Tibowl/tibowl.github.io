/**
 * CONFIG
 * */
const configDetails = {
    columns: {
        title: "Amount of columns",
        type: "number",
        min: 1,
        max: 30,
        default: 10,
    },
    drawAll: {
        title: "Draw all (including missing) characters",
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
    }
}
const config = {
    columns: 10,
    drawAll: true,
    displayRank: true
}
Object.entries(configDetails).forEach(([id, settings]) => {
    const label = document.createElement("label")
    label.innerText = settings.title
    label.for = id

    const input = document.createElement("input")
    input.id = id
    input.type = settings.type
    input.min = settings.min
    input.max = settings.max
    input.value = settings.default
    input.checked = settings.default
    input.onchange = updateConfig
    input.onchange(input)

    document.getElementById("config").appendChild(label)
    document.getElementById("config").appendChild(input)
    document.getElementById("config").appendChild(document.createElement("br"))
})

function updateConfig() {
    const id = this.id

    if (configDetails[id].type == "number")
        config[id] = +this.value
    if (configDetails[id].type == "checkbox")
        config[id] = !!this.checked

    if (updateOutput)
        updateOutput()
}

/**
 * IMAGE GENERATION
 * */
const fontFamilyName = `"ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",Osaka, "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif`
const fontFamilyNumbers = '"Helvetica Neue", Helvetica, Arial, sans-serif'
async function updateOutput() {
    imageID++
    const currentID = imageID
    
    /** @type {HTMLCanvasElement} */
    const output = document.getElementById("output")
    const context = output.getContext("2d")

    if (!isReady || !document.getElementById("render").checked) return output.height = 0
    console.log(config, charStats)


    let chars = Object
        .entries(charStats)
        .map(([id, { stars, rank }]) => { return { id, stars, rank, name: hashlist[id].name } })
        .filter(k => k.stars > 0 || config.drawAll)
        .sort((a, b) => a.name.localeCompare(b.name))

    console.log(chars)

    const columns = config.columns
    const rows = Math.ceil(chars.length / columns)

    const imageSize = 128
    const [width, height] = [imageSize + 8, imageSize + 42]
    output.width = width * columns
    output.height = height * rows

    context.fillStyle = "#FFFFFF"
    context.fillRect(0, 0, output.width, output.height)

    for (const ind in chars) {
        const char = chars[ind]
        const x = ind % columns, y = Math.floor(ind / columns)
        const img = document.getElementById(`img-${char.id}`)

        await new Promise((resolve) => {
            if (img.isLoaded) resolve()
            else img.callback = resolve
        })
        if (currentID !== imageID) return

        /** @type {HTMLCanvasElement} */
        const scrap = document.getElementById("scrap")
        const chr = scrap.getContext("2d")

        scrap.width = width
        scrap.height = height

        chr.drawImage(img, width / 2 - imageSize / 2, 2)
        // Grayscale
        if (char.stars == 0) {
            const imageData = chr.getImageData(width / 2 - imageSize / 2, 2, imageSize, imageSize)
            const data = imageData.data
            for (let i = 0; i < data.length; i += 4) {
                const luma = data[i + 0] * 0.2126 + data[i + 1] * 0.7152 + data[i + 2] * 0.0722
                data[i + 0] = data[i + 1] = data[i + 2] = luma
            }
            chr.putImageData(imageData, width / 2 - imageSize / 2, 2)
        }
        
        const [top, bottom] = char.name.split("（")
        chr.textAlign = "center"
        chr.font = `800 20px ${fontFamilyName}`
        chr.fillStyle = "#000"

        chr.shadowColor = "#222"
        chr.shadowOffsetX = 1
        chr.shadowOffsetY = 1
        chr.shadowBlur = 1

        let fontSize = 20
        while (chr.measureText(top).width > (width - 4) && fontSize-- > 10)
            chr.font = `800 ${fontSize}px ${fontFamilyName}`

        chr.fillText(top, width / 2, 130 + 20)

        if (bottom) {
            chr.font = `800 12px ${fontFamilyName}`
            chr.fillText(`（${bottom}`, width / 2, 130 + 20 + 15)
        }
        
        if (char.rank > 0 && config.displayRank) {
            chr.font = `700 30px ${fontFamilyNumbers}`
            chr.fillStyle = getRankColor(char.rank)
            chr.strokeStyle = "#000"
            chr.lineWidth = 3
            chr.shadowBlur = 3
            chr.textAlign = "right"
            chr.strokeText(`R${char.rank}`, width / 2 + imageSize / 2 - 3, imageSize - 3)
            chr.fillText(`R${char.rank}`, width / 2 + imageSize / 2 - 3, imageSize - 3)
        }

        if (char.stars > 0 && config.displayStars) {
            chr.font = `700 30px ${fontFamilyNumbers}`
            chr.fillStyle = getStarColor(char.stars)
            chr.strokeStyle = "#000"
            chr.lineWidth = 3
            chr.shadowBlur = 3
            chr.textAlign = "left"
            chr.strokeText(`${char.stars}\u2605`, width / 2 - imageSize / 2 + 3, imageSize - 3)
            chr.fillText(`${char.stars}\u2605`, width / 2 - imageSize / 2 + 3, imageSize - 3)
        }

        const xOff = x * width, yOff = y * height
        context.drawImage(scrap, xOff, yOff)
    }
}

function getStarColor(stars) {
    if (stars >= 6) return "#FFABD3"
    return "#FDE77E"
}
function getRankColor(rank) {
    if (rank >= 18) return "#FE4854"
    if (rank >= 11) return "#C382FD"
    if (rank >=  7) return "#FDDC63"
    if (rank >=  4) return "#BBCBD9"
    if (rank >=  2) return "#E7926B"
                    return "#5595F4"
}
isReady = true
updateOutput()