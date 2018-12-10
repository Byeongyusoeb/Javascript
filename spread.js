const oldHeroes = ['Superman', 'Batman', 'Spiderman', 'Hulk'];
const newHeroes = ['Ironman', 'Antman', 'Storm', 'X-man'];

const oldTotalHeroes = oldHeroes.concat(newHeroes); 

const newTotalheroes = ['Aquaman', 'Thunderman', ...oldHeroes, ...newHeroes];

console.log(oldTotalHeroes)
console.log(newTotalheroes)

validate = (arg) => (oldTotalHeroes.indexOf(arg) < 0 ? [arg, ...oldTotalHeroes] : [...oldTotalHeroes])

const a = validate('Superman')

console.log(a)