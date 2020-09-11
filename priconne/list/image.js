/**
 * CONFIG
 * */
const configDetails = {
    columns: {
        title: "Column count",
        type: "number",
        min: 1,
        max: 30,
        default: 10,
    }
}
const config = {
    columns: 10
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
    
    if(updateOutput)
        updateOutput()
}

/**
 * IMAGE GENERATION
 * */
function updateOutput() {
    if(!isReady) return
    console.log(config)

    /** @type {HTMLCanvasElement} */
    const output = document.getElementById("output")
    const context = output.getContext("2d")
}
isReady = true
updateOutput()