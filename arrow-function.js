// 1. delete function keyword
// 2. add fat arrow and delete or not curly bracket
// 3. compose in one line
// 4. delete return keyword
// 5. delte semicolon in parenthesis or move it outside of parenthesis
// 6. delete or not parenthesis of parameter

const oldAdd = function(a, b){
    return a + b;
}

const newAdd = (a, b) => a+b
const returnTwo = () => 2 // no parameter -> ()

console.log(oldAdd(1, 2));
console.log(newAdd(1, 2));

const numbers = [2, 4, 6, 8];

numbers.map(number => number + 1 )

const fn = a => (a ? 1 : 2); // simple if-else statement in arrow function

console.log(fn(true), fn(false)) 


const superHeroes = {
    members: ['Superman', 'Batman', 'spiderman', 'Ironman'],
    teamname: 'Super Heroes',
    teamSummary: () => superHeroes.members.map(member => 
        console.log(`${member} is a member of ${this.teamname}`)
            // In this case, this in console.log is just an argument 
            )
    };

// S + V('this' keyword )
superHeroes.teamSummary();


// ** First exercise ** //

// 1. Use fat arrow.
const fibonacci = n => (n < 3 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
console.log(fibonacci(9));


// ** Second exercise ** //

// 1. Use fat arrow and 'this' keyword.
const profile = {
    name : 'Superman',
    getName : () => profile.name
}

console.log(profile.getName());

// Don't use 'this' keyword if you can

const superHeroes1 = [
    {name: 'Superman', price: 1000},
    {name: 'Batman', price: 700},
    {name: 'Spiderman', price: 1500},
    {name: 'X-man', price: 1100}
];

const superHeroes2 = [
    {name: 'Birdman', price: 1100},
    {name: 'Antman', price: 7100},
    {name: 'Aquaman', price: 1550},
    {name: 'Wonderwoman', price: 11100}
];

function hero911(arg){
    return {
        heroes: arg,
        totalHeroesPrice: () => arg.reduce((acc, hero) => acc + hero.price, 0),
        eachHeroesPrice: (name) => arg.find((value) => value.name === name).price ,
    }
}

const shopA = hero911(superHeroes1);
const shopB = hero911(superHeroes2);

console.log(shopA.totalHeroesPrice());
console.log(shopB.eachHeroesPrice('Aquaman'));