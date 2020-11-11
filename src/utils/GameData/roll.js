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
            alert("wrong dice")
    }
}


