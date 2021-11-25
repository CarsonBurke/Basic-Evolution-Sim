let tick = 0
let playerCount = 0

function runTick() {

    tick += 1

    const game = games[Object.keys(games)[0]]

    const players = Object.values(game.objects.player)
    playerCount = players.length

    const food = Object.values(game.objects.food)

    runBatch(players, food)
    foodManager(food)

    display()
    animate()
}

function runBatch(players, food) {

    const game = games[Object.keys(games)[0]]

    for (const player of players) {

        // Find closest food to player

        const closestFood = player.findClosestFood(food)

        // Define inputs and outputs

        const inputs = [
            { name: 'Player x', value: player.left + player.width / 2 },
            { name: 'Player y', value: player.left + player.width / 2 },
            { name: 'Closest food x', value: closestFood ? closestFood.left + closestFood.width / 2 : 0 },
            { name: 'Closest food y', value: closestFood ? closestFood.left + closestFood.width / 2 : 0 },
        ]
        player.inputs = inputs

        const outputs = [
            { name: 'Move forward' },
            { name: 'Rotate clockwise' },
            { name: 'Rotate counter-clockwise' },
        ]
        player.outputs = outputs

        // Create network if player doesn't have one

        if (!player.network) player.createNetwork(inputs, outputs)

        // Run network

        player.network.forwardPropagate(inputs)

        // 

        window.onkeydown = function(e) {

            const key = e.key

            if (key == 'w') {

                let left = player.left - player.speed * Math.cos(player.angle)
                let top = player.top - player.speed * Math.sin(player.angle)
                
                player.move(left, top)
            }
            if (key == 'a') {

                player.rotateClockwise()
                return
            }
            if (key == 'd') {

                player.rotateCounterClockwise()
                return
            }
        }

        //


    }
}

function foodManager(food) {

    const game = games[Object.keys(games)[0]]

    let i = food.length

    while (i < 10) {

        game.createFood()
        i++
    }
}

function display() {

    const displayValues = {
        tick: tick,
        playerCount, playerCount,
    }

    // Loop through displayValues

    for (const valueName in displayValues) {

        const displayValue = displayValues[valueName]

        // Find element with displayValue as id and set text to displayValue
        
        const el = document.getElementById(valueName)
        el.innerText = displayValue
    }
}

function animate() {

    // Stop if animateTickSkip is valid for this tick

    if (tick % animateTickSkip != 0) return

    const game = games[Object.keys(games)[0]]

    // Store the current transformation matrix

    map.cr.save()

    // Use the identity matrix while clearing the canvas

    map.cr.setTransform(1, 0, 0, 1, 0, 0)
    map.cr.clearRect(0, 0, map.el.width, map.el.height)

    // Restore the transform

    map.cr.restore()

    const objects = game.objects
    
    for (const type in objects) {

        for (const id in objects[type]) {

            const object = objects[type][id]

            object.draw()
        }
    }
}