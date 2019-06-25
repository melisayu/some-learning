function breakingRecords(scores) {
    let best = scores[0]
    let worst = scores[0]
    let hi = 0
    let low = 0
    for(let i=0; i < scores.length; i++ ) {
        if(scores[i] > best) {
            hi++
            best = scores[i]
        }
        if(scores[i] < worst) {
            low++
            least = scores[i]
        }
    }
    console.log(`${hi} ${low}`)
}

breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])


// 4 0