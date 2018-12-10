 const superman = {
     type: 'hero',
     houlyPayment: 1000
 }

 
 // old way
 var oldType = superman.type;
 var oldHoulyPayment = superman.houlyPayment;
 
 console.log(`${oldType} ${oldHoulyPayment}`)


// new way
// const { type , houlyPayment } = superman

// console.log(`${type} ${houlyPayment}`)


var employee = {
    name: 'Superman',
    type: 'hero',
    houlyPayment: 1000
}

const {name, type, houlyPayment} = employee


priceOfHero = (arg) => console.log(`${name} is a ${type} employee with houtly payment of ${houlyPayment}`)

priceOfHero(employee)

var employees = [
    {
        name: 'Superman',
        type: 'hero',
        payments: ['1000/hr', '10000/day', '50000/week']
    },
    {
        name: 'Batman',
        type: 'hero',
        payments: ['2000/hr', '10000/day', '50000/week']
    },
    {
        name: 'Ironman',
        type: 'hero',
        payments: ['3000/hr', '10000/day', '50000/week']
    }
]

// old way
var payment1 = employees[0].payments;

// new way
const [ , , {payments} ] = employees

console.log(payments)


// ** First exercise ** //

// Refactor 'isEngineer' function to a single line

const batman = {
    title: 'Engineer',
    department: 'Engineering'
}

const antman = {
    title: 'Programmer',
    department: 'Coding'
}

isEngineer = ({title, department}) => (title === 'Engineer' && department === 'Engineering')
console.log(isEngineer(antman))


// ** Second exercise ** //

// const classesAsObject = [{subject: 'Geography', time: '2PM', teacher: 'Ironman'}]
// Use map helper
const classes = [
    ['Chemistry', '9AM', 'Superman'],
    ['Physics', '10:15AM', 'Batman'],
    ['MAth', '11:30AM', 'Robin']
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
    return {subject, time, teacher}
})

console.log(classesAsObject)


// ** Third exercise ** //

// Ouput [2, 4, 6, ...]
const number = [1, 2, 3];

const double = ([number, ...rest]) =>  number === undefined ? [] : [number * 2, ...double(rest)]

console.log(double(number))