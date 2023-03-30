// this's my first coding ok, so don't blame me if i don't write it perfect.
function calc(Bacteria, start, end, every) {
    let time = Math.abs((start - end) * 60 / every)

    for (u = 0; u < time; u++) {
        Bacteria += Bacteria
    }
    console.log(`Bacteria = ${Bacteria}`)
}

calc(500, 9, 12, 20)

