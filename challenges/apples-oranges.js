// s and t = 7 11 (house)
// a and b = 5 15 (apple tree & orange tree)
// m and n = 3 2 (amount of falling apple & amount of falling orange)
// -2 2 1 (apple unit distance) ~> 3, 7, 6
// 5 -6 (orange unit distance) ~> 20, 9
// total = apple 1, orange 1


function countAppleOrange(s, t, a, b, apples, oranges) {
    // 1) make variable for apple and orange (fruits) position
    let applesPos = []
    let orangesPos = []
     // 2) create loop to determine the position of fallen fruits = apple tree position + the distance of the fruit from it
    for(let i = 0; i < apples.length; i++) {
            applesPos[i] = (a + apples[i])
            }
    for(let i = 0; i < oranges.length; i++) {
            orangesPos[i] = (b + oranges[i])
            }
     // make variables for fruits in range of the house
    let applesInRange = 0
    let orangesInRange = 0
    // for loop to check each fruit if they're within the area
    for (let i = 0; i < applesPos.length; i++) {
        if(applesPos[i] >= s && applesPos[i] <= t) {
            applesInRange++
        }
    }
    for (let i = 0; i < orangesPos.length; i++) {
        if (orangesPos[i] >= s && orangesPos[i] <= t) {
        orangesInRange++
        }
    }

    console.log(`${applesInRange}${'\n'}${orangesInRange}`)
}


countAppleOrange(7, 11, 5, 15, [-2, 2, 1], [5, -6])