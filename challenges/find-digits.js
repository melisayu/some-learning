// 1) Put numbers into array
// 2) Split number into digit 
// 3) make forloop function, check if number is divisible by each digit
// 4) create variable divisor and return

function findDigits(n) {
    let digits = [n]
    let separatedNum = digits.toString().split('')
    let divisor = 0
        for (let i = 0; i < separatedNum.length; i++) {
            if (n % separatedNum[i] === 0) {
            divisor++
            }
        }
    return divisor
    // console.log(divisor)
}

//findDigits([12])
console.log(findDigits(12))
console.log(findDigits(1012))