const fs = require('fs');

class Card {
    rarity = "";
    title = "";
    type = "";
    cost = 0;
    power = 0;
    effect = {};
    artwork = {};

    setup({ ...prompt }) { };
    load(json) { };
    export() {
        fs.writeFile(__dirname + "/../../cards/empty", "", (err) => {
            if(err) throw err;
            console.log("Card was successfully exported!")
        });
    };
};

const test = new Card();
test.export();