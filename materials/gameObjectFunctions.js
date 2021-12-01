GameObject.prototype.draw = function() {

    const gameObject = this

    // Find imageEl based on gameObject's imageID

    const imageEl = document.getElementById(gameObject.imageID)

    // Draw image using gameObject's properties

    map.cr.drawImage(imageEl, gameObject.left, gameObject.top, gameObject.width, gameObject.height)
}

GameObject.prototype.move = function(x, y) {

    const gameObject = this

    // Apply map borders
    
    if (x <= 0) return
    if (x + gameObject.width >= map.el.width) return

    if (y <= 0) return
    if (y + gameObject.height >= map.el.height) return

    //
    
    gameObject.left = x
    gameObject.top = y
}

GameObject.prototype.delete = function() {

    const gameObject = this
    
    delete gameObject.findGame().objects[gameObject.type][gameObject.id]
}

GameObject.prototype.findGame = function() {

    const gameObject = this

    return games[gameObject.gameID]
}

GameObject.prototype.isInside = function(otherObj) {

    const gameObject = this

    // Check is gameObject is inside otherObj

    if (gameObject.bottom >= otherObj.top &&
        gameObject.top <= otherObj.bottom &&
        gameObject.right >= otherObj.left &&
        gameObject.left <= otherObj.right) {

        // Inform true

        return true
    }
}