let players = [
    "Messi - Forward",
    "Ronaldo - Forward",
    "Neymar - Forward",
    "De Bruyne - Midfielder", 
    "Kante - Midfielder"
    , 
    "Van Dijk - Defender", 
    "Alisson - Goalkeeper",
];

let filterPlayersByPosition = (position, players) => {
    return players.filter((x) => x.includes(position));
};

console.log(filterPlayersByPosition("Goalkeeper", players));