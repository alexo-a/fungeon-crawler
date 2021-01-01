import {roll} from "./calculations"

function Player(name, isNPC = true) {
    this.name = name;
    this.isNPC = isNPC;
    this.activeGear={};
}

Player.prototype.getStats = function () {
    return {
        maxHitpoints: this.maxHitpoints,
        currentHitpoints: this.currentHitpoints,
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
        activeWeapon: this.activeWeapon,
        equippedGear: this.equippedGear
    };
};

Player.prototype.setStats = function (stats) {
    this.currentHitpoints = stats.currentHitpoints || 15;
    this.maxHitpoints = stats.maxHitpoints || 15;
    this.initiative = stats.initiative || 0;
    this.speed = stats.speed || 5;
    this.armor = stats.armor || 12;
    this.hitBonus = stats.hitBonus || 0;
    this.visibilityRange = stats.visibilityRange || 10;
    this.sneakBonus = stats.sneakBonus || 0;
    this.trapDisableBonus = stats.trapDisableBonus || 0;
    this.agility = stats.agility || 0;
    //chanceToFlee will be the % chance of an npc fleeing if brought below 50% hitpoints
    this.chanceToFlee = stats.chanceToFlee || 5;
    this.aggroRange = stats.aggroRange || 2;
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

Player.prototype.equipGear = function(item){
    //item must be in inventory
    for (let x = 0; x < this.inventory.length; x++) {
        if (this.inventory[x].name === item.name && this.inventory[x].quantity >= 1) {
            switch (item.class){
                case "torso":
                    this.activeGear.torso = item;
                    break;
                case "neck":
                    this.activeGear.neck = item;
                    break;
                case "head":
                    this.activeGear.head = item;
                    break;
                case "hands":
                    this.activeGear.hands = item;
                    break;
                case "back":
                    this.activeGear.back = item;
                    break;
                default:
                    alert("not an active gear item. needs to be of class torso/neck/head/hands/back")

            }
        }
    }
}

Player.prototype.getWeapon = function(){
    return this.activeWeapon;
}

Player.prototype.getHitpoints = function () {
    return `${this.name}'s health is now ${this.currentHitpoints}!`;
};

Player.prototype.isAlive = function () {
    if (this.currentHitpoints <= 0) {
        return false;
    }
    return true;
};

Player.prototype.reduceHitpoints = function (damage) {
    this.currentHitpoints -= damage;
    this.currentHitpoints = Math.max(this.currentHitpoints, 0)
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

<<<<<<< HEAD:src/utils/GameData/player.js
Player.prototype.willFlee = function () {
    if (this.currentHitpoints < this.maxHitpoints && (this.currentHitpoints / this.maxHitpoints) <= 0.5 && roll(20) <= this.chanceToFlee){
        return true;
    }
    return false;
};

export default  Player;
=======
module.exports = Player;
>>>>>>> 6f5edcabff9c12c147f6d0c6a95c019d0b8d5071:src/utils/GameData/Player.js
