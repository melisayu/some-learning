// Sock Merchant Challenge

// let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
let ar = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]


function socksForSale(n, ar) {
    let pairedNum = 0
    let sorted = ar.sort()
    for( let i=0; i < n; i = i+2) {
        if(sorted[i] == sorted[i+1]) {
            pairedNum++
        }
    }
    return pairedNum
}

let totalPairs = socksForSale(10, ar)
console.log(totalPairs)




