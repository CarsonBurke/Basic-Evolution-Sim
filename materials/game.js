class Game {
    constructor() {

        const game = this

        //

        game.id = newID()

        //

        game.objects = {
            player: {},
            food: {},
        }

        //

        games[game.id] = game
    }
}