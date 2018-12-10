let numbers = [1, 2, 3, 4, 5];
let sum = 0;

// Imperative
for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index];
}

//Declarative
let result = numbers.reduce(number => sum + number)

let heros = new Array(
    {balance: 5000, id: 1 , name: 'Superman', type: 'Flying', feePerMin: 100},
    {balance: 7000, id: 2 , name: 'Batman', type: 'Flying', feePerMin: 120},
    {balance: 8000, id: 3 , name: 'Ironman', type: 'Metal', feePerMin: 130},
    {balance: 4000, id: 4 , name: 'X-man', type: 'Mutant', feePerMin: 140},
    {balance: 7000, id: 5 , name: 'Antman', type: 'Insect', feePerMin: 150}
);

let names = heros.reduce(function(accumulator, hero){
    accumulator.push(hero.name)
    return accumulator
}, []);


// ** First exercise ** //

// Implement the below function

function balancedParans(string){
    return !string.split("").reduce(function(acc, char){ // When you put ! before data, It's going to return boolean.
        if (acc < 0){ return acc }
        if (char === "("){ return ++acc }
        if (char === ")"){ return --acc }
        return acc
    }, 0)
}

console.log(balancedParans('()))')) // false
console.log(balancedParans('((()))')) // true
console.log(balancedParans(')(')) // true


// ** Second exercise ** //

// Use the 'reduce' helper to find the sum of all the distances traveled.

let trips = [
    {distnace: 34},
    {distnace: 12},
    {distnace: 15},
]

let totlaDistance = trips.reduce(function(acc, trip){
    return acc+trip.distnace
}, 0)

console.log(totlaDistance)



// ** Third exercise ** //

// Use the 'reduce' and 'find' helper to create an object
// that tallies the number of a specific type. ex) Flying: 3, Running:2, ...}'.

heros = new Array(
    {name: 'Superman', type: 'Flying'},
    {name: 'X-man', type: 'Running'},
    {name: 'Spiderman', type: 'Running'},
    {name: 'Batman', type: 'Running'},
    {name: 'Ironman', type: 'Flying'},
    {name: 'Robin', type: 'Running'}
);

let obj = heros.reduce(function(obj, hero){
    obj[hero.type]++

    return obj
}, {Flying : 0, Running : 0});

console.log(obj)


// ** Fourth exercise ** //

// Implement function unique(array) using the 'reduce' helper.

let numberList = [1, 1, 2, 3, 4, 4];

let unique = numberList.reduce(function(acc, number){
    acc.includes(number)? acc: acc.push(number);
    return acc
}, []);

console.log(unique)