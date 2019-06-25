// she can jump on cumulus (number 0), 1 or 2 leaps
// must avoid thunderheads (number 1)
// find minimum number of jumps to the last cloud

// 1) creates 2 variables to hold the count of min jumps, and to increment inside the while loop
// 2) create whileloop to iterate through array of clouds
// 3) set it to iterate amount of items in the given array C (jump 2 space and jump 1 space)
// 4) avoiding thunderheads ~> break the while loop if two if else statements are not met
// 5) add every jump

function jumpingOnClouds(c) {
    let jump = 0
    let i = 0
    while (true) {
        if (i + 2 < c.length && c[i+2] === 0) {
            i += 2
        } else if (i + 1 < c.length) {
            i++
        } else {
            break
        }
        jump++
    }
    return jump
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])) // 4 jumps
console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0])) // 3 jumps
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 0, 0, 1, 0, 0])) // 6 jumps