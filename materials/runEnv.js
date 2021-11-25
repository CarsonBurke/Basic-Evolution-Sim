let tick = 0

function runTick() {

    tick += 1

    runBatch()

    display()

    animate()
}

function runBatch() {

    const game = games[Object.keys(games)[0]]

    const players = Object.values(game.objects.player)
    const food = Object.values(game.objects.food)

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

            if (key == 'a') {

                player.rotateClockwise()
                return
            }
            if (key == 'd') {

                player.rotateCounterClockwise()
                return
            }
        }

        if (tick % 10 == 0) console.log(player.angle)

        //
        
        let left = player.left - 10 * Math.cos(player.angle)
        let top = player.top - 10 * Math.sin(player.angle)
        
        player.move(left, top)
    }
}

function display() {

    const displayValues = {
        tick: tick,
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