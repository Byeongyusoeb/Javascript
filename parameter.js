// default parameter
function httpRequest(url, method = 'GET'){
    console.log(method);
}

httpRequest('google.com');
httpRequest('google.com', 'POST');

function User(arg = generateCode()){
    this.code = arg;
}

function generateCode(){
    return parseInt(Math.random() * 10000);
}

const a = new User(1123);
console.log(a)

const b = new User();
console.log(b)



// ** First exercise ** //

// Make it simple

sum = (a=0 , b=0) => a+b

cssTemplate = (style = {}) => { style.margin = '20px'; style }




// rest parameter

function adder(numbers){ // does not matter wheter length of argument is long or not
    return numbers.reduce((sum, number) => {
        return sum+number;
    }, 0)
}

const add = adder([1, 2, 3, 4, 5]);
console.log(add)