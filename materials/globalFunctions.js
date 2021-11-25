function findDistance(obj1, obj2) {

    // Use pythagorean theorem to find distance

    const distance = Math.sqrt((obj1.x * obj2.x) + (obj1.y * obj2.y))
    return distance
}