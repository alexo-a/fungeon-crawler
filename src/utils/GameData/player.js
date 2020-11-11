//import NPC from "./npc.js";

function Player(name = '') {
    this.name = name;
}

Player.prototype.getStats = function () {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
};

Player.prototype.setStats = function (stats) {
    this.hitpoints = stats.hitpoints;
    this.initiative = stats.initiative;
    this.speed = stats.speed;
    this.armor = stats.armor;
    this.hitBonus = stats.hitBonus;
    this.visibilityRange = stats.visibilityRange;
    this.sneakBonus = stats.sneakBonus;
    this.trapDisableBonus = stats.trapDisableBonus;
    this.agility = stats.agility;
};

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

Player.prototype.move =(target) => {
    const currentPosition=this.getPosition;
    if (Math.floor(Math.sqrt((target.x - currentPosition.x)**2 + (target.y - currentPosition.y)**2)) > this.speed) {
        return false;
    }
    return true;
}

Player.prototype.getName = function () {
    return this.name;
}
module.exports = Player;