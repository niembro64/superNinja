// import ninja from "./ninja";
const Ninja = require("./ninja");

class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom){
        super(name, health, speed, strength)
        this.wisdom = wisdom;
    }
    speakWisdom = () => {
        this.drinkSake();
        console.log("this message is wise")
    }
    showStats = () => {
        console.log(`Ninja: ${this.name} Health: ${this.health} Speed: ${this.speed} Strength: ${this.speed} Wisdom: ${this.wisdom}`)
    }
}

const Eric = new Sensei("Eric", 10, 10, 10, 10);
Eric.showStats()
Eric.speakWisdom();
Eric.showStats()

