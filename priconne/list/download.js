/**
 * DOWNLOAD
 */

const dl = document.getElementById("download")
dl.onclick = download

function download() {
    const out = document.getElementById("output").toDataURL("image/jpeg", 0.98)
    dl.href = out
    dl.download = `Priconne list - ${new Date().toISOString().replace("T", " ").replace(/:/g, "-").split(".")[0]}.jpg`

    setTimeout(() => {
        dl.href = "javascript:void(0)"
    }, 0);
}