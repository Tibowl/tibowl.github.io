let isReady = false
let imageID = 0

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

let lastHash = [], lastChar = 0
function frame() {
    if (videoElem.videoWidth == 0) return
    fixCanvas()

    const currentHash = getHash(55, 548, 86, 41)
    if (currentHash[0] == 0 && currentHash[1] == 0) {
        // stopCapture()
        return
    }

    if (currentHash.every((v, i) => v == lastHash[i])) return
    lastHash = currentHash

    const info = getInfo(currentHash)

    const starInfo = getStars()
    if (starInfo.colors.length < 5) return lastHash = []

    if (info.id == lastChar) return
    lastChar = info.id

    const rank = getRank()
    console.log(info, starInfo, rank)

    charStats[info.id] = { stars: starInfo.starCount, rank }
    updateTable()

    const img = document.createElement("img")
    img.src = getImageURL(info.id, starInfo.starCount)
    img.style = "max-width: 32px;"

    const details = document.createElement("span")
    details.innerText = `${info.name}: R${rank} ${starInfo.colors.map(k => (k == "gold" || k == "pink" || k == "white") ? "\u2605" : "\u2606").join("")}`

    const detect = document.createElement("li")
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
    const hash10 = getHash(548, 520, 11, 18, true)
    const hash1 = getHash(560, 520, 11, 18, true)

    hash1.shift()
    hash10.shift()

    // console.log(hash10)
    // console.log(hash1)

    const number1 = +getClosestIndex(numbers, hash1)
    const number10 = +getClosestIndex(numbers, hash10)

    return (number10 % 10) * 10 + number1
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

    let xOffset = 0
    for (let i = 0; i < scanBarHs[0].length; i += 4) {
        if (scanBarHs.every(a => a[i] > 5 || a[i + 1] > 5 || a[i + 2] > 5))
            break

        xOffset++
    }

    let yOffset = 25
    const scanBarVs = [10, 50, 100, 150, 200, 250].map(x => context.getImageData(x, yOffset, 1, 40).data)

    for (let i = 0; i < scanBarVs[0].length; i += 4) {
        if (scanBarVs.every(a => a[i] > 170 || a[i + 1] > 170 || a[i + 2] > 200))
            break

        yOffset++
    }
    // console.log("Found window offsets:", xOffset, yOffset)

    canvas.width = videoElem.videoWidth - xOffset
    canvas.height = videoElem.videoHeight - yOffset
    context.drawImage(videoElem,
        xOffset, yOffset, canvas.width, canvas.height,
        0, 0, canvas.width, canvas.height)
}

const hashContext = hashCanvas.getContext("2d")
function getHash(x, y, w, h, bw = false) {
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
            if (bw) {
                if (c1 > 230 * 3)
                    hashes[Math.floor(i / 2)] |= 1
            } else if (c1 > c2)
                hashes[Math.floor(i / 2)] |= 1

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
