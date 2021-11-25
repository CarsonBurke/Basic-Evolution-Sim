Player.prototype.rotateClockwise = function() {

    const player = this

    player.angle += 0.5
}

Player.prototype.rotateCounterClockwise = function() {

    const player = this

    player.angle -= 0.5
}

Player.prototype.kill = function() {

    const player = this

    // Delete network visuals

    player.network.visualsParent.remove()

    // Delete player

    player.delete()
}

Player.prototype.findClosestFood = function(food) {

    const player = this

    // Sort food by distance from player

    const foodByDistance = food.sort((a, b) => findDistance(a, player) - findDistance(b, player))
    
    // Set closestFood as first in foodByDistance and inform it

    const closestFood = foodByDistance[0]
    return closestFood
}

Player.prototype.createNetwork = function(inputs, outputs) {

    const player = this

    // Create neural network

    const network = new NeuralNetwork()

    // Create layers

    const layerCount = 3

    for (let i = 0; i < layerCount; i++) network.addLayer({})

    // Create perceptrons

    // Create input perceptrons

    for (let i = 0; i < inputs.length; i++) network.layers[0].addPerceptron()

    // Create hidden perceptrons

    const hiddenPerceptronsNeed = 4

    // Loop through layers

    for (const layerName in network.layers) {

        // Filter only hidden layers

        const layersCount = Object.keys(network.layers).length

        if (layerName > 0 && layerName < layersCount - 1) {

            const layer = network.layers[layerName]

            for (let i = 0; i < hiddenPerceptronsNeed; i++) layer.addPerceptron()
        }
    }

    // Create output perceptrons

    for (let i = 0; i < outputs.length; i++) network.layers[layerCount - 1].addPerceptron()

    // Initialize network

    network.init(inputs, outputs)

    // Add network to player

    player.network = network
}

Player.prototype.rotate = function() {

    const player = this
    const game = player.findGame()

    ctx.translate(player.left + player.width / 2, player.top + player.height / 2)
    ctx.rotate(player.angle)
}