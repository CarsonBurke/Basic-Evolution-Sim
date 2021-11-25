Game.prototype.createPlayer = function(x, y, degree, network) {

    const game = this

    // If positions aren't provided

    if (!x && !y) {

        // Create them

        x = Math.random() * map.el.width
        y = Math.random() * map.el.height
    }

    // opts for player

    const width = 38
    const height = 58

    // Create player

    const player = new Player({
        type: "player",
        left: x - width * 0.5,
        top: y - height * 0.5,
        width: width,
        height: height,
        imageID: 'player',
        score: 0,
        degree: degree,
        network: network || undefined,
        gameID: game.id,
    })
    player.draw()

    // Assign player to game
    
    game.objects.player[player.id] = player
}

Game.prototype.createFood = function(x, y) {

    const game = this

    // opts for food

    const width = 50
    const height = 50

    // Create food

    const food = new Food({
        type: "food",
        left: x - width * 0.5,
        top: y - height * 0.5,
        width: width,
        height: height,
        imageID: 'food',
        gameID: game.id,
    })
    food.draw()

    // Assign food to game
    
    game.objects.food[food.id] = food
}