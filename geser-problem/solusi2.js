function geserString(s, geserKiri, geserKanan) {
  const diffMod = (geserKiri - geserKanan) % s.length
  return [...s.slice(diffMod), ...s.slice(0, diffMod)].join('')
}
  
  console.log(geserString('abcd', 1, 2)) // dabc
  console.log(geserString('abcdef', 7, 6)) // bcdefa
  console.log(geserString('abcdef', 7, 5)) // cdefab
  console.log(geserString('abcdef', 2, 4)) // efabcd
  console.log(geserString('abcdef', 13, 5)) // 
  console.log(geserString('abcdef', 2, 10)) // 
  