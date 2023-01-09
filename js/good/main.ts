class Main {
    id?: number;
    name: string;
    description: string;
    size?: number;
    price?: number;
    availble?: boolean;

    constructor(
        id = 0,
        names, descriptions,
        sizes = 0,
        prices = 0,
        availbles = false,
    ) {
        this.id = id;
        this.name = names;
        this.description = descriptions;
        this.size = sizes;
        this.price = prices;
        this.availble = availbles;
    }
}

module.exports = {Main}