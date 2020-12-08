const Items = {
    gold: { name: "gold", class: "money", weight: .01, value: 1 },
    shortsword: { name: "shortsword", class: "weapon", weight: 2, damage: 6, value: 20, range: 1 },
    shortbow: { name: "shortbow", class: "weapon", weight: 2, damage: 6, value: 15, range: 5},
    leatherArmor: { name: "leatherArmor", class: "torso", weight: 7, armor: 2, value: 15 },
    defenseAmulet: { name: "defenseAmulet", class: "neck", weight: 0.5, armor: 1, value: 150 },
    godCape: { name: "godCape", class: "back", weight: 9, armor: 99, value: 1 },
    worthlessCape: { name: "worthlessCape", class: "back", weight: 9, armor: 0, value: 1 }
}

module.exports = Items;