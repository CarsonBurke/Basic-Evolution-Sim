function findDistance(obj1, obj2) {

    // Use pythagorean theorem to find distance
    
    const distance = Math.sqrt(((obj1.left + obj1.width / 2) - (obj2.left + obj2.width / 2)) ** 2 + ((obj1.top + obj1.height / 2) - (obj2.top + obj2.height / 2)) ** 2)
    return distance
}