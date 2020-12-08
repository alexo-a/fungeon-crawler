//import NPC from "./npc.js";

function Player(name = '') {
    this.name = name;
}

Player.prototype.getStats = function () {
    return {
        hitpoints: this.hitpoints,
        initiative: this.initiative,
        speed: this.speed,
        armor: this.armor,
        hitBonus: this.hitBonus,
        visibilityRange: this.visibilityRange,
        sneakBonus: this.sneakBonus,
        trapDisableBonus: this.trapDisableBonus,
        agility: this.agility,
        movementRemaining: this.movementRemaining,
        position: this.position,
        activeWeapon: this.activeWeapon
    };
};

Player.prototype.setStats = function (stats) {
    this.hitpoints = stats.hitpoints || 15;
    this.initiative = stats.initiative || 0;
    this.speed = stats.speed || 5;
    this.armor = stats.armor || 12;
    this.hitBonus = stats.hitBonus || 0;
    this.visibilityRange = stats.visibilityRange || 10;
    this.sneakBonus = stats.sneakBonus || 0;
    this.trapDisableBonus = stats.trapDisableBonus || 0;
    this.agility = stats.agility || 0;
};

Player.prototype.setMovementRemaining = function(newValue){
    this.movementRemaining = newValue || this.speed
}

Player.prototype.setInventory = function (contents) {
    this.inventory = contents;
    return this.inventory;
}

Player.prototype.getInventory = function () {
    if (this.inventory.length) {
        return this.inventory;
    }
    return false;
};

Player.prototype.equipWeapon = function(weapon){
    //weapon must be in inventory
    for (let x = 0; x < this.inventory.length; x++ ){
        if (this.inventory[x].name === weapon.name && this.inventory[x].quantity >= 1){
            if (weapon.class === "weapon") {
                this.activeWeapon = weapon;
            }
            break;
        }
    }
}

Player.prototype.getWeapon = function(){
    return this.activeWeapon;
}

Player.prototype.getHealth = function () {
    return `${this.name}'s health is now ${this.health}!`;
};

Player.prototype.isAlive = function () {
    if (this.health === 0) {
        return false;
    }
    return true;
};

Player.prototype.reduceHealth = function (health) {
    this.health -= health;

    if (this.health < 0) {
        this.health = 0;
    }
};

Player.prototype.getAttackValue = function () {
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max - min) + min);
};

Player.prototype.addPotion = function (potion) {
    this.inventory.push(potion);
};

Player.prototype.usePotion = function (index) {

};

Player.prototype.getPosition = function (){
    return this.getPosition;
}

Player.prototype.setPosition = function(position){
    this.position = position
}


Player.prototype.getName = function () {
    return this.name;
}

module.exports = Player;