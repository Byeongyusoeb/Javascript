let heros = new Array(
    {balance: 5000, id: 1 , name: 'Superman', type: 'Flying', feePerMin: 100},
    {balance: 7000, id: 2 , name: 'Batman', type: 'Flying', feePerMin: 120},
    {balance: 8000, id: 3 , name: 'Ironman', type: 'Metal', feePerMin: 130},
    {balance: 4000, id: 4 , name: 'X-man', type: 'Mutant', feePerMin: 140},
    {balance: 7000, id: 5 , name: 'Antman', type: 'Insect', feePerMin: 150}
);

let comments = new Array(
    {writerOfId: 1, content: 'Beautiful Super world'},
    {writerOfId: 2, content: 'Beautiful Bat world'},
    {writerOfId: 1, content: 'Beautiful Crypton world'},
    {writerOfId: 3, content: 'Beautiful Iron world'},
    {writerOfId: 5, content: 'Beautiful Insect world'},
    {writerOfId: 4, content: 'Beautiful Mutant world'},
    {writerOfId: 4, content: 'Beautiful Rose world'},
    {writerOfId: 2, content: 'Beautiful Olleh world'},
);

//Imperative

let AllEatFood = true;
let NotAllEatFood = false;

for (let index = 0; index < heros.length; index++){
    if (heros[index].balance < 5000) {
        AllEatFood = false;
        NotAllEatFood = true;
    }
};

console.log(AllEatFood, NotAllEatFood);


//Declarative
AllEatFood = heros.every(hero => hero.balance >= 5000); // Fat arrow 

console.log(AllEatFood);

AllEatFood = heros.some(hero => hero.balance >= 5000);

console.log(AllEatFood);

// ** First exercise ** //

// return 'true' if every user has submitted a login form.

let loginForm = [
    {id:41, hasSubmitted: true},
    {id:62, hasSubmitted: false},
    {id:84, hasSubmitted: true},
]

let loginFormSubmitted = loginForm.every(loginForm => loginForm.hasSubmitted === true);

console.log(loginFormSubmitted);



// ** Second exercise ** //

// assign the boolean 'true' to the variable 'inProgress' if any network request has 'status' of 'pending'

let httpRequests = [
    {url: '/photos', status: 'complete'},
    {url: '/albums', status: 'pending'},
    {url: '/users', status: 'failed'},
]

let inProgress = httpRequests.some(httpRequest => httpRequest.status === 'pending')

console.log(inProgress)