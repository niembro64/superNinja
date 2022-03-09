class Ninja{
    constructor(name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName = () => {
        console.log(this.name)
    }
    showStats = () => {
        console.log(`Ninja: ${this.name} Health: ${this.health} Speed: ${this.speed} Strength: ${this.speed}`)
    }
    drinkSake = () => {this.health += 10}
}

module.exports = Ninja;

const Roby = new Ninja("Roby", 100, 10, 10);
Roby.sayName();
Roby.showStats(); 
Roby.drinkSake();
Roby.showStats(); 