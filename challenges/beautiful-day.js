function beautifulDays(i, j, k) {
    //loop through all the integer from i to j
    // return all integer to string, then reverse
    // get the result by dividing the difference between number and it's reverse by k
    // make variable isBeautifulDay to determine if the difference is divisible by k
    // check if it's whole number or an integer, return to isBeautiful day if true
    let isBeautifulDay = 0
    // start from here ---------
    for (let n = i; n <= j; n++) {
        let reversed = n.toString().split('').reverse().join('')
        let result = (reversed-n) / k // or  Math.abs(reversed-n) / k
        if (Number.isInteger(result)) {
            isBeautifulDay++ } 
    }
    return isBeautifulDay
}
console.log(beautifulDays(20, 23, 6)) // result 2
console.log(beautifulDays(13, 45, 3)) // result 33 