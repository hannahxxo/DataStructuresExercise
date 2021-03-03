// 1a
const jedi = [];

// 1b
jedi[jedi.length] = "Luke";
console.log(jedi);

// 1c
jedi.push("Obi-Wan Kenobi");
console.log(jedi);

// 1d
jedi.unshift("Yoda");
console.log(jedi);

// 1e
console.log(jedi[1]);

// 1f
jedi.pop();
console.log(jedi);

// 1g
jedi.shift();
console.log(jedi);

// 2a
const sithLord = ["Darth Vader", "Darth Sidious", "Darth Maul"];
console.log(sithLord);

// 2b
const imperialOfficers = ["Grand Moff Tarkin", "Orson Krennic"];
console.log(imperialOfficers);

// 2c
const starWarsVillains = sithLord.concat(imperialOfficers);
console.log(starWarsVillains);

// 2d
console.log(starWarsVillains.slice(0, 2));

// 3a
const droids = {
    astromech: "R2-D2",
    protocol: "C-3PO",
    assassin: "IG-88"
};

// 3b
console.log(droids["astromech"]);

// 3c
console.log(droids.protocol);

// 3d
droids["assassin"]="IG-11"
console.log(droids);

// BONUS
// 4
starWarsVillains[0][6]
console.log(starWarsVillains[0][6]);

// 5
console.log(sithLord.slice(-2, -1));

// 6a
const starWarsMovie = [
    {
        episodeOne: "The Phantom Menace",
        episodeTwo: "Attack of the Clones",
        episodeThree: "Revenge of the Sith"
    },
    {
        episodeFour: "A New Hope",
        episodeFive: "The Empire Strikes Back",
        episodeSix: "Return of the Jedi"
    },
    {
        episodeSeven: "The Force Awakens",
        episodeEight: "The Last Jedi",
        episodeNine: "The Rise of Skywalker"
    }
];

// 6b
starWarsMovie.splice(1, 0, "Solo", "Rouge One");
console.log(starWarsMovie);
