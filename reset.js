const MathLibrary = {
    mulltiplyTwoNumbers(...rest){
        return this.multiply(...rest);
    },
    multiply(...rest){ // list
        return rest.reduce((total, element) => total * element, 1)
    }
}

const a = MathLibrary.mulltiplyTwoNumbers(4, 5);
console.log(a);

const n = MathLibrary.multiply(4, 5);
console.log(n);


// ** First exercise ** //

// Refactor below functions


product = (...array) => array.reduce((acc, element)=>acc * element ,1)

unshift = (array, ...rest) => [...array, ...rest]

join = (array1, array2) => [...array1, ...array2]
