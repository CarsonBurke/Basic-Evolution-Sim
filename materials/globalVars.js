// Construct vars

let properties = {
    mapWidth: 900,
    mapHeight: 700,
    startingPlayers: 100,
    minFood: 100,
    nextId: 0,
    gameSpeed: 100000,
    animateTickSkip: 1,
    games: {},
    map: {
        el: document.getElementById("map"),
    },
    colors: {
        red: "#b51818",
        blue: "#3718b5",
        green: "#18b543",
        yellow: "#a0a620",
        purple: "#c700c2",
    },
    findById(id) {

        return objects[id]
    },
    newId() {

        nextId++
        return nextId - 1
    }
}

// Assign variables to globalThis

for (let propertyName in properties) {

    let property = properties[propertyName]

    globalThis[propertyName] = property
}