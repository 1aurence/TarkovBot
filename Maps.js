class Maps {
    static getMapImage(mapName) {
        switch (mapName) {
            case "interchange":
                return './maps/interchange.jpg'
            case "factory":
                return './maps/factory.png'
            case "customs":
                return './maps/customs.png'
            case "reserve":
                return './maps/reserve.png'
            default:
                break;

        }
    }
    static listMapNames() {
        return ['Factory', 'Interchange', 'Customs', 'Reserve', 'The Lab', 'Woods', 'Town', 'Shorline']
    }

}



module.exports = Maps