// haven't done right yet

function designerPdfViewer(h, word) {
    //let letters = word.split(' ')
    let highest = 0
    for(let i = 0; i < word.length; i++) {
        if(h[word.charCodeAt(i) - 97] > highest) {
            highest = h[word.charCodeAt(i) - 97]
        }
    }

    console.log(highest * (word.length))
}

designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], 'zaba')


