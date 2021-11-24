class Game {
    constructor() {

        //

        this.id = newID()

        //

        this.active = true
        this.spawnedEnemies = 0
        this.spawning = true
        this.objects = {
            player: {},
            food: {},
        }

        //

        games[this.id] = this
    }
}