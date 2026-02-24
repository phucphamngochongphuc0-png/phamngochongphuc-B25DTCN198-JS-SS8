let playersName = ["messi", "ronaldo", "neymar", "de bruyne", "kante", "van dijk", "alisson"];

let getUpperNames = playersName.map((x) => { 
    
    return x.toUpperCase();
});

console.log(getUpperNames);


// let getUpperNames = (name) => {

//  list.map((name) => { 
//     let new = name.toUpperCase();
// });

//     return new;
// }

// console.log(getUpperNames(playersName));
