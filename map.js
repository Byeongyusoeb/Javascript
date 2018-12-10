let numbers = new Array(1, 2, 3, 4, 5);
let doubledNumbers = new Array();

// impelatic = mutable
for (let index = 0; index < numbers.length; index++) {
    doubledNumbers.push(numbers[index] * 2)
}

// declarative = immutable
doubledNumbers = numbers.map(function(number){
    return number * 2
});

// ** First exercise ** //

// Create a new array including only height of each image.
let images = new Array(
    {height: '34px', width: '39px'},
    {height: '54px', width: '19px'},
    {height: '83px', width: '75px'}
);

let heights = images.map(function(image){
    return image.height
});

console.log(heights)



// ** Second exercise ** //

// Create a new array including speed of each item: distance/time
let trips = new Array(
    {distance: 34, time: 10},  
    {distance: 90, time: 50},  
    {distance: 59, time: 25}
);

speed = function (trip) {
        return trip.distance / trip.time
}

let speeds =  trips.map(speed)

console.log(speeds)


// ** Third exercise ** //

// Implement a 'pluck' function.

let heros = new Array(
    {name: 'superman'},
    {name: 'batman'},
    {name: 'x-man'}
);

function pluck(array, property){
    return array.map(function(hero){
        return hero.name;
    });
}

result = pluck(heros, 'name'); // return ['superman', 'batman', 'x-man']

console.log(result)