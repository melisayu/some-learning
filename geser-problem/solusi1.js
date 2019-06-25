module.exports = {
  geserStringSatu: function (s, geserKiri, geserKanan) {
    let a = []
    let b = []
    let str = s.split('')  
    while (geserKiri > 0) {
      a = str.shift()
      geserKiri--
      str.push(a)
    }
    while (geserKanan > 0) {
      b = str.pop()
      geserKanan--
      str.unshift(b)
    }
    return str.join('')
  }
}

/*
console.log(geserStringSatu('abcd', 1, 2)) // dabc
console.log(geserStringSatu('abcdef', 7, 6)) // bcdefa
console.log(geserStringSatu('abcdef', 7, 5)) // cdefab
console.log(geserStringSatu('abcdef', 2, 4)) // efabcd
console.log(geserStringSatu('abcdef', 13, 5)) // 
console.log(geserStringSatu('abcdef', 2, 10)) // 
*/