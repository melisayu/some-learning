// let n = 8 
let s = ['U', 'D', 'D', 'D', 'U', 'D', 'U', 'U']
//let s = ['D','D','U','U','D','D','U','D','U','U','U','D']


function countingValley(n, s) {
    let sealevel = 0
    let valley = 0
    for (let i = 0; i < n; i++) {
        if(s[i] == 'U') {
            sealevel++
        } else if(s[i] == 'D' && sealevel !== 0) {
            sealevel--
        } else if (s[i] == 'D') {
            sealevel--
            valley++
            } 
    }
    return valley
}

//let steps = countingValley(8, s)
//console.log(steps)
console.log(countingValley(8,s))



/*
if(s[i] == 'D' && sealevel == 0) {
            valley++
            sealevel--
        } else if(s[i] == 'D' && sealevel !== 0) {
            sealevel--
        } else if (s[i] == 'U') {
            sealevel++
            } 

    */ 