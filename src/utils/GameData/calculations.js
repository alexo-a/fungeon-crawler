export function roll(dice){
    switch (dice){
        case 100:
            return Math.ceil(Math.random() * 100)
        case 20: 
            return Math.ceil(Math.random() * 20)
        case 12:
            return Math.ceil(Math.random() * 12)

        case 10:
            return Math.ceil(Math.random() * 10)

        case 8:
            return Math.ceil(Math.random() * 8)

        case 6:
            return Math.ceil(Math.random() * 6)

        case 4:
            return Math.ceil(Math.random() * 4)
        default:
            alert(`${dice} isn't a valid dice option`)
    }
}

export function calculateDistance (target, currentPosition) {
    return Math.floor(Math.sqrt(Math.pow(target.x - currentPosition.x, 2) + Math.pow(target.y - currentPosition.y, 2)))
}

export function attackTarget(attacker, target){
    //calculate if it's a hit
    let hitRoll = roll(20)
    console.log(`${attacker.name}'s raw hit roll: ${hitRoll}`)
    let hitSum = attacker.hitBonus + attacker.agility + hitRoll
    let gearArmorSum = 0;
    for (const [slot, item] of Object.entries(target.activeGear)) {
        gearArmorSum += item.armor;
    }
    let defenceSum = target.armor + gearArmorSum;
    console.log(`${attacker.name} rolls a ${hitSum} vs. ${target.name}'s armor of ${defenceSum}`)
    if (hitSum >= defenceSum){
        let damageDone = roll(attacker.activeWeapon.damage)
        target.reduceHitpoints(damageDone);
        console.log(`attack hit! ${attacker.name} does ${damageDone} damage. ${target.getHitpoints()}`)
        
    }
    else {console.log("whoosh.")}
}