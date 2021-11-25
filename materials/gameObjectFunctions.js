GameObject.prototype.draw = function() {

    const gameObject = this

    // Find imageEl based on gameObject's imageID

    const imageEl = document.getElementById(gameObject.imageID)

    // Draw image using gameObject's properties

    map.cr.drawImage(imageEl, gameObject.left, gameObject.top, gameObject.width, gameObject.height)
}

GameObject.prototype.move = function(x, y) {

    const gameObject = this

    gameObject.left = x
    gameObject.top = y
}

GameObject.prototype.delete = function() {

    const gameObject = this

    
}

GameObject.prototype.exists = function() {

    const gameObject = this


}

GameObject.prototype.findGame = function() {

    const gameObject = this

    return games[gameObject.gameID]
}