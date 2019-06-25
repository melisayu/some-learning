function catAndMouse(x, y, z) {
    // make if function
    // return according to the condition

    if (Math.abs(x - z) < Math.abs(y - z)) {
        return 'Cat A'
    } if (Math.abs(y - z) < Math.abs(x - z)) {
        return 'Cat B'
    } else {
        return 'Mouse C'
    }
}

catAndMouse(1, 3, 2)