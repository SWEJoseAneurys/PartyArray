let party = [
    {
        name: 'Joline',
        hitpoints: 15,
        belongings: ["spear", "bread", "Tums"],
        companion: {
            name: "Tabby",
            type: "cat",
        }
    },
    {
        name: 'Timothy',
        hitpoints: 10,
        belongings: ["sword", "potion", "Tums"],
        companion: {
            name: "Velma",
            type: "Bat",
        }
    },
    {
        name: 'Sarah',
        hitpoints: 20,
        belongings: ["bow", "arrows", "wood"],
        companion: {
            name: "Tony",
            type: "tiger",
        }
    }
];

console.log("1) Double everyone's hitpoints:");
console.log("");

party.forEach((britneyspears)=> {
    britneyspears.hitpoints = britneyspears.hitpoints*2
});

console.log(party);

console.log("");
console.log("");


console.log("2) Timothy loses 5 pts:");
console.log("");

const takeDamage = (name, HP)=> {
    party.forEach((yonce)=> {
        if (yonce.name == name){
            yonce.hitpoints = yonce.hitpoints - HP
        }
    })
};

takeDamage("Timothy", 5);

console.log(party);

console.log("");
console.log("");


console.log("3) Sarah's tiger fix:");
console.log("");

party.forEach((kellyclarkson)=> {
    if (kellyclarkson.name == "Sarah"){
        kellyclarkson.companion.type = "jellyfish"
    }
});

console.log(party);

console.log("");
console.log("");


console.log("4) Potion-drinking Timmy:");
console.log("");

party.forEach((mariahcarey)=> {
    if (mariahcarey.name == "Timothy") {
        mariahcarey.hitpoints = mariahcarey.hitpoints =+20;
        mariahcarey.belongings.splice(1, 1) 
    }
});

console.log(party);

console.log("");
console.log("");


console.log("5) Timmy thee Thief-y:");
console.log("");

party.forEach((celinedion)=> {
    if (celinedion.name == "Joline") {
        celinedion.belongings.splice(1, 1)
    } else if (celinedion.name == "Timothy") {
        celinedion.belongings.push("bread")
    }
});

console.log(party);

console.log("");
console.log("");


console.log("6) Joline out:");
console.log("");

const makeExit = (name) => {
    party.forEach((pattilabelle)=> {
        if (pattilabelle.name == name){
            party.splice(pattilabelle, 1)
        }
    })
};

makeExit("Joline");

console.log(party);

console.log("");
console.log("");


console.log("7) New Adventurer:");
console.log("");

const addAdventurer = (newAdventurer) => {
    party.push(newAdventurer)
};

addAdventurer({name: "Iggy", hitpoints: 60, belongings: ["water", "meat", "gun"], companion: {name: "Mink", type: "horse"}});

console.log(party);

console.log("");
console.log("");


console.log("8) Jackpot!:");
console.log("");

const hitJackpot = (amountOfGold) => {
    let playerGets = amountOfGold / party.length;
    party.forEach((arianagrande) => {
        arianagrande.gold = playerGets
    })
};

hitJackpot(200);

console.log(party);

console.log("");
console.log("");


console.log("9) Sarah gets bear:");
console.log("");

party.forEach((adele) => {
    if (adele.name == "Sarah") {
        adele.gold = adele.gold -5;
        adele.companion.type = "bear"
    }
});

console.log(party);

console.log("");
console.log("");


console.log("10) Timothy's rusty sword:");
console.log("");

party.forEach((arethafranklin) => {
    if (arethafranklin.name == "Timothy") {
        arethafranklin.belongings[0] = "rusty sword"
    }
});

console.log(party);

console.log("");
console.log("");


console.log("11) Whos the leader?:");
console.log("");

const setLeader = (name) => {
    party.forEach((whitneyhouston) => {
        if (whitneyhouston.name == name){
            whitneyhouston.leader = "True"
        } else {
            whitneyhouston.leader = "False"
        }
    })
};

setLeader("Iggy");

console.log(party);

console.log("");
console.log("");