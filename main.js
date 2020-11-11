let Player =require("./player");
let Items = require("./Items");


me=new Player("Geraldo");
console.log(me.getName())
console.log(me.setInventory({
    item: Items.gold,
    quantity: 100
}))

console.log(me.getInventory());