let isReady = false
let imageID = 0
let imageOutputEnabled = false

/**
 *  AUTOMATIC DETECTION
 * */
const displayMediaOptions = {
    video: {
        cursor: "never"
    },
    audio: false
}
const videoElem = document.getElementById("video")
const startElem = document.getElementById("start")
const stopElem = document.getElementById("stop")
const canvas = document.getElementById("canvas")
const hashCanvas = document.getElementById("hashCanvas")
hashCanvas.width = 128, hashCanvas.height = 128

const recentDetect = document.getElementById("recentDetect")

// Set event listeners for the start and stop buttons
startElem.addEventListener("click", startCapture, false)
stopElem.addEventListener("click", stopCapture, false)

let task = null
async function startCapture() {
    try {
        videoElem.srcObject = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions)
        videoElem.srcObject.addEventListener("ended", stopCapture)

        document.getElementById("start").style = "display: none;"
        document.getElementById("stop").style = ""
        if (task == null)
            task = setInterval(frame, 100)
    } catch (err) {
        alert("Unable to start video: " + err)
    }
}
function stopCapture() {
    if (task) {
        clearInterval(task)
        task = null
    }

    if (videoElem.srcObject) {
        videoElem.srcObject.getTracks().forEach(track => track.stop())
        videoElem.srcObject = null
    }
    document.getElementById("start").style = ""
    document.getElementById("stop").style = "display: none;"
}

let lastChar = {}
function frame() {
    if (videoElem.videoWidth == 0) return
    fixCanvas()
    zoom()

    const currentHash = getHash(55, 548, 86, 41)
    if (currentHash[0] == 0 && currentHash[1] == 0) {
        // stopCapture()
        return
    }

    const info = getInfo(currentHash)

    const starInfo = getStars()
    if (starInfo.colors.length < 5) return

    const uelevel = getUELevel()

    const rank = getRank()
    if (info.id == lastChar.id && uelevel == lastChar.uelevel && rank == lastChar.rank && starInfo.starCount == lastChar.stars) return
    lastChar = {
        id: info.id,
        uelevel,
        rank,
        stars: starInfo.starCount
    } 

    console.log("Detected", info, starInfo, rank, uelevel)

    charStats[info.id] = { stars: starInfo.starCount, rank, uelevel }
    updateTable()

    const currentData = `${info.name}`
    const img = document.createElement("img")
    img.src = getImageURL(info.id, starInfo.starCount)
    img.style = "max-width: 32px;"

    const details = document.createElement("span")
    details.innerText = `${info.name}: R${rank} ${starInfo.colors.map(k => (k == "gold" || k == "pink" || k == "white") ? "\u2605" : "\u2606").join("")} UE Lv.${uelevel}`

    if (recentDetect.children.length >= 1 && recentDetect.children[0].data == currentData) recentDetect.removeChild(recentDetect.children[0])

    const detect = document.createElement("li")
    detect.data = currentData
    detect.appendChild(img)
    detect.appendChild(details)
    recentDetect.prepend(detect)

    if (recentDetect.children.length > 5) recentDetect.removeChild(recentDetect.children[5])
    updateOutput()
}

function getInfo(currentHash) {
    let matched = null
    for (const [id, info] of Object.entries(hashlist)) {
        const { name, hashes, maxstar } = info

        for (const hash of hashes) {
            const dist = calcDistance(hash, currentHash)
            if (matched == null || dist < matched.dist)
                matched = { id, name, hash, dist, maxstar }
        }
    }
    // console.log(matched, currentHash, calcDistance(matched.hash, currentHash))
    return matched
}

function getStars() {
    const stars = [57, 69, 82, 94, 106, 119].map(x => getHash(x, 602, 8, 6)[0])
    // console.log(stars)
    const guesses = stars.map(k => {
        return {
            gold: calcDistance([109272311], [k], true),
            gray: calcDistance([214086811], [k], true),
            white: calcDistance([259221675], [k], true),
            pink: calcDistance([225625335], [k], true)
        }
    })

    const colors = []
    let starCount = 0, foundGray = false
    for (let i = 0; i < 6; i++) {
        if (guesses[i].gold < 1.5 && !foundGray) {
            colors[i] = "gold"
            starCount++
        } else if (guesses[i].pink < 1.5 && !foundGray) {
            colors[i] = "pink"
            starCount++
        } else if (guesses[i].white < 3) {
            colors[i] = "white"
            starCount++
            foundGray = true
        } else if (guesses[i].gray < 1.5) {
            colors[i] = "gray"
            foundGray = true
        } else break
        // console.log(i, guesses[i].white)
    }
    // console.log(colors)
    return { colors, starCount }
}

function getRank() {
    const numbers = [
        // 0 - 9
        [0, 86016, 8388416, 58720896, 32, 0, 16, 47453632],
        [0, 0, 0, 8388608, 54525952, 67108816, 44739200, 0],
        [0, 0, 4194416, 50332656, 2096, 28720, 16891952, 67076144],
        [0, 0, 128, 48, 65584, 196656, 17285232, 66650048],
        [0, 1024, 24320, 99072, 1704704, 6292224, 66412368, 44740512],
        [0, 0, 22347904, 58916912, 50528304, 50528304, 50528368, 50528192],
        [0, 16384, 6291264, 31695568, 33685552, 67108864, 134283312, 251360],
        [0, 0, 16777216, 50331712, 50333312, 50360320, 50429952, 64487424],
        [0, 1024, 7634880, 44941312, 720896, 212992, 249856, 56538176],
        [0, 0, 16728064, 58773504, 12288, 16, 16480, 47576960],

        // empty
        [0, 0, 0, 0, 0, 0, 0, 0],
    ]
    const hash10 = getHash(548, 520, 11, 18, 1)
    const hash1 = getHash(560, 520, 11, 18, 1)

    hash1.shift()
    hash10.shift()

    return getNumber(numbers, hash1, hash10)
}

function getUELevel() {
    const numbers = [
        // 0 - 9
        [1397760, 134217680, 436207780, 805306380, 12, 805306380, 222298488, 46137216],
        [0, 16777216, 100663296, 201326592, 1062557012, 715827880, 0, 0],
        [0, 117440636, 402653372, 805307404, 805310476, 805421068, 796852236, 178782216],
        [0, 67108896, 12, 805306380, 805502988, 805765148, 804312440, 176177120],
        [256, 2816, 512, 3145728, 16777472, 524638160, 1073741816, 512],
        [0, 89587748, 1006632972, 805306380, 805306380, 805371932, 805524976, 536919936],
        [16384, 25165648, 109215908, 939524108, 805306380, 805306380, 805388376, 180128],
        [0, 1006632964, 1006632968, 1006633856, 1006653440, 1006796800, 1028653056, 780140544],
        [1344, 131088368, 405635116, 537853964, 196620, 805552140, 626716700, 178270176],
        [5505024, 134168580, 402821132, 536883212, 12, 805306392, 223729120, 46135808],

        // Nothing
        [0, 0, 0, 0, 0, 0, 0, 0],

        // Lv.
        [8, 0, 327680, 783360, 2896, 188, 352, 0],
        [0, 0, 0, 1073741812, 44, 12, 12, 12],

        // "Unlockable"
        [0, 67371008, 0, 2048, 1610641408, 2181726208, 0, 0],
        [1024, 6144, 1431662592, 2281709568, 0, 3072, 0,],
        [201326592, 1543503872, 2820669440, 65536, 196608, 268632064, 671256576, 1024],
    ]

    const hash1 = getHash(365, 179, 12, 17, 2)
    const hash10 = getHash(351, 179, 12, 17, 2)
    const hash100 = getHash(337, 179, 12, 17, 2)

    hash1.shift()
    hash10.shift()
    hash100.shift()

    // console.log(getNumber(numbers, hash1, hash10, hash100))
    return getNumber(numbers, hash1, hash10, hash100)
}

function getNumber(numbers, ...hashes) {
    let total = 0

    for (const hash of hashes.reverse()) {
        const number = +getClosestIndex(numbers, hash)
        if (number >= 10)
            total *= 10
        else
            total = total * 10 + number
    }

    return total
}

function getClosestIndex(arr, hash) {
    let closest = -1, dist = Number.MAX_SAFE_INTEGER
    for (const ind in arr) {
        const curDist = calcDistance(arr[ind], hash)
        if (curDist < dist) {
            closest = ind
            dist = curDist
        }
    }
    return closest
}

function calcDistance(a, b) {
    let colorCost = 0
    for (let i of [0, 10, 20]) {
        const ac = (a[0] >> i) & 0x3ff
        const bc = (b[0] >> i) & 0x3ff
        colorCost += Math.abs(ac - bc) / 16
    }

    let d = 0
    for (let i = 1; i < a.length; i++)
        d += count(a[i] ^ b[i])
    return d + colorCost
}

function count(v) {
    let c = (v & 0x55555555) + ((v >> 1) & 0x55555555)
    c = (c & 0x33333333) + ((c >> 2) & 0x33333333)
    c = (c & 0x0F0F0F0F) + ((c >> 4) & 0x0F0F0F0F)
    c = (c & 0x00FF00FF) + ((c >> 8) & 0x00FF00FF)
    c = (c & 0x0000FFFF) + ((c >> 16) & 0x0000FFFF)
    return c
}

let xOffset = 0, yOffset = 25
function fixCanvas() {
    canvas.width = videoElem.videoWidth
    canvas.height = videoElem.videoHeight

    /** @type {CanvasRenderingContext2D} */
    const context = canvas.getContext('2d')
    context.strokeStyle = "#FF0000"
    context.fillStyle = "#000000"
    context.drawImage(videoElem,
        0, 0, canvas.width, canvas.height,
        0, 0, canvas.width, canvas.height)

    const scanBarHs = [50, 100, 150, 200, 250].map(y => context.getImageData(0, y, 40, 1).data)

    xOffset = 0, yOffset = 25
    if (navigator.userAgent.includes("Chrome")) {
        xOffset = 0, yOffset = 30
    } else if (navigator.userAgent.includes("Firefox")) {
        xOffset = 8, yOffset = 31
    } else {
        for (let i = 0; i < scanBarHs[0].length; i += 4) {
            if (scanBarHs.every(a => (a[i] > 30 || a[i + 1] > 30 || a[i + 2] > 30)))
                break

            xOffset++
        }
    }

    const scanBarVs = [10, 50, 100, 150, 200, 250].map(x => context.getImageData(x, yOffset, 1, 40).data)

    for (let i = 0; i < scanBarVs[0].length; i += 4) {
        if (scanBarVs.every(a => a[i] > 170 || a[i + 1] > 170 || a[i + 2] > 200))
            break

        yOffset++
    }

    const overrideX = +document.getElementById("x-offset").value
    if (overrideX >= 0) xOffset = overrideX
    document.getElementById("x-offset-used").innerText = xOffset

    const overrideY = +document.getElementById("y-offset").value
    if (overrideY >= 0) yOffset = overrideY
    document.getElementById("y-offset-used").innerText = yOffset
    // console.log("Found window offsets:", xOffset, yOffset)

    canvas.width = 1280 // videoElem.videoWidth - xOffset
    canvas.height = 720 // videoElem.videoHeight - yOffset
    context.drawImage(videoElem,
        xOffset, yOffset, canvas.width, canvas.height,
        0, 0, canvas.width, canvas.height)
}

const zoomingTL = document.getElementById("zoomTL")
const zoomingBR = document.getElementById("zoomBR")
function zoom() {
    //if (!zooming.parentElement.open) return
    const scale = 8

    const zoomedTL = prepareContext(zoomingTL)
    const zoomedBR = prepareContext(zoomingBR)

    const offsetXTL = Math.max(xOffset - (zoomingTL.width / scale / 2), 0)
    const offsetYTL = Math.max(yOffset - (zoomingTL.height / scale / 2), 0)
    
    const offsetXBR = Math.max(xOffset - (zoomingBR.width / scale / 2) + 1280, 0)
    const offsetYBR = Math.max(yOffset - (zoomingBR.height / scale / 2) + 720, 0)

    drawZoomed(zoomedTL, offsetXTL, offsetYTL, scale)
    drawLines(zoomedTL, scale)

    drawZoomed(zoomedBR, offsetXBR, offsetYBR, scale)
    drawLines(zoomedBR, scale)

    zoomedTL.fillStyle = "#FF0000"
    zoomedTL.fillRect(Math.min(xOffset, (zoomingTL.width / scale / 2)) * scale, 0, 1, zoomingTL.height)
    zoomedTL.fillRect(0, Math.min(yOffset, (zoomingTL.height / scale / 2)) * scale, zoomingTL.width, 1)

    zoomedBR.fillStyle = "#FF0000"
    zoomedBR.fillRect((zoomingBR.width / scale / 2) * scale, 0, 1, zoomingBR.height)
    zoomedBR.fillRect(0, (zoomingBR.height / scale / 2) * scale, zoomingBR.width, 1)
}

/**
 * 
 * @param {HTMLCanvasElement} canvas 
 * @returns {CanvasRenderingContext2D} context
 */
function prepareContext(canvas) {
    const context = canvas.getContext("2d")
    context.fillStyle = "#000000"
    context.fillRect(0, 0, canvas.width, canvas.height)
    return context
}

function drawLines(context, scale) {
    context.fillStyle = "#CCCCCC55"
    for (let i = 0; i < zoomingTL.width / scale; i++)
        context.fillRect(i * scale, 0, 1, zoomingTL.height)
    for (let j = 0; j < zoomingTL.height / scale; j++)
        context.fillRect(0, j * scale, zoomingTL.width, 1)
}

function drawZoomed(context, offsetX, offsetY, scale) {
    context.drawImage(videoElem,
        offsetX, offsetY, zoomingTL.width / scale, zoomingTL.height / scale,
        0, 0, zoomingTL.width / scale, zoomingTL.height / scale)

    const source = context.getImageData(0, 0, zoomingTL.width / scale, zoomingTL.height / scale)
    const target = context.createImageData(zoomingTL.width, zoomingTL.height)
    for (let i = 0; i < zoomingTL.width; i++)
        for (let j = 0; j < zoomingTL.height; j++)
            for (let k = 0; k < 4; k++)
                target.data[(i + j * zoomingTL.height) * 4 + k] =
                    source.data[(Math.floor(i / scale) + Math.floor(j / scale) * (zoomingTL.height / scale)) * 4 + k]
    context.putImageData(target, 0, 0)
}

const hashContext = hashCanvas.getContext("2d")
function getHash(x, y, w, h, mode = 0) {
    hashContext.drawImage(canvas, x, y, w, h, 0, 0, 17, 16)

    const imgData = hashContext.getImageData(0, 0, 17, 16).data

    const hashes = new Uint32Array(8)
    const colors = new Uint32Array(3)
    for (let j = 0; j < 16; ++j) {
        for (let i = 0; i < 16; ++i) {
            hashes[Math.floor(i / 2)] <<= 1

            const offset1 = (i + j * 17) * 4
            const offset2 = ((i + 1) + j * 17) * 4

            const c1 = imgData[offset1] + imgData[offset1 + 1] + imgData[offset1 + 2]
            const c2 = imgData[offset2] + imgData[offset2 + 1] + imgData[offset2 + 2]

            switch (mode) {
                case 0:
                    if (c1 > c2)
                        hashes[Math.floor(i / 2)] |= 1
                    break;
                case 1:
                    if (c1 > 230 * 3)
                        hashes[Math.floor(i / 2)] |= 1
                    break;
                case 2:
                    if (imgData[offset1] < 90 && imgData[offset1 + 1] < 90 && imgData[offset1 + 2] < 90)
                        hashes[Math.floor(i / 2)] |= 1
                    break;

                default:
                    break;
            }

            for (let k = 0; k < 3; k++)
                colors[k] += imgData[offset1 + k]
        }
    }

    return [
        (Math.round(colors[0] / 16 / 16) << 0) +
        (Math.round(colors[1] / 16 / 16) << 10) +
        (Math.round(colors[2] / 16 / 16) << 20),
        ...hashes
    ]
}
