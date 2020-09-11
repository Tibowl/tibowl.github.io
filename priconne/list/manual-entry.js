/**
 * MANUAL ENTRY
 * */
let charStats = {}

const dentry = document.getElementById("data-entry")
Object.entries(hashlist)
    .sort(([aid, a], [bid, b]) => a.name.localeCompare(b.name))
    .forEach(([id, entry]) => {
        const row = document.createElement("tr")

        row.innerHTML = `
            <td>
                <figure>
                    <img class="table-img" id="img-${id}" src="${getImageURL(id, 0)}" />
                    <figcaption>${entry.name}</figcaption>
                </figure
            </td>
            <td class="star-select"><input onchange="updateData(this)" type="number" min="0" max="6" value="0" id="stars-${id}" />\u2605</td>
            <td class="rank-select">R<input onchange="updateData(this)" type="number" min="0" max="20" value="1" id="rank-${id}" /></td>
        `

        dentry.appendChild(row)
        charStats[id] = {
            stars: 0,
            rank: 0
        }
    })

function getImageURL(id, stars) {
    return `./unit/${id}${Math.min(hashlist[id].maxstar, [6, 1, 1, 3, 3, 3, 6][stars] || 6)}1.webp`
}

function updateData(e) {
    const { id, value } = e
    const [type, cid] = id.split("-")
    charStats[cid][type] = +value

    const img = document.getElementById(`img-${cid}`)
    img.src = getImageURL(cid, charStats[cid].stars)
    img.style = charStats[cid].stars == 0 ? "filter: grayscale(90%)" : ""
}

function updateTable() {
    Object.entries(charStats)
        .forEach(([id, data]) => {
            document.getElementById(`rank-${id}`).value = data.rank
            document.getElementById(`stars-${id}`).value = data.stars

            const img = document.getElementById(`img-${id}`)
            img.src = getImageURL(id, charStats[id].stars)
            img.style = charStats[id].stars == 0 ? "filter: grayscale(90%)" : ""
        })
}

