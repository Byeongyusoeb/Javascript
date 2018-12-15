// 4! = 4 x 3 x 2 x 1

// Could make full of memory...
const factorial_1 = (n) =>{
    let result = 1;

    while(n > 1){
        result *= n
        n--;
    }

    return result
}


const factorial_2 = (n) =>{
    if (n < 2){
        return 1;
    }

    return n * factorial_2(n-1)
}

// solution of memory, optimizable 
const factorial_3 = (n, acc = 1) =>{
    if (n < 2){
        return acc;
    }

    return factorial_3(n-1, n * acc)
}

console.log(factorial_1(10))
console.log(factorial_2(10))