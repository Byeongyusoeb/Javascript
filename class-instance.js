// ES6 => FRP
// JS + Class => TypeScript => OOP

class Car {
    constructor(arg){
        this.carProperty1 = arg;
    }
    
    // method => S(Class name) + V(Method name)
    // instance method = Subject is a instance
    // class method = Subject is a class

    drive() {
        console.log('I am a car method')
    }
}

const aCarInstance = new Car('This is a car instance')

console.log(aCarInstance)

class Sedan extends Car{
    constructor({carArg, type}){
        super(carArg); // Create Car instance and add sub-properties
        this.sedanProperty1 = type;
    }
}

const anArg = {carArg: ' This is car instace', type: 'Sedan'}

const aSedan1 = new Sedan(anArg);
console.log(aSedan1)

// ** First exercise ** //

// Initialize the Life's 'power' to 100
// The constructor will be called with an 'living' object that has a 'name' property
// Assign value to the 'name' propety of the Life
// The Human inherits the Life, and should have a 'talk' method
// Ths only argument to theis method is another instance of the Human class.
// The instance of Human that is passed in shou;d have their 'power' increased by 10

const living = { 
    lifeName: 'Nature',
    humanName: 'Supermam',
    power: 100
}

class Life{
    constructor({lifename}){
        this.power = living.power;
        this.name = lifename;
    }
}

class Human extends Life{
    constructor(living){
        super(living.lifeName)
        this.name = living.humanName
    }
    talk(human){
        return human.power += 10
    }
}

const aHuman1 = new Human(living)
const aHuman2 = new Human(living)

console.log(aHuman1)

aHuman1.talk(aHuman2)

console.log(aHuman2.power)