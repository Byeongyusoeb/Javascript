let heros = new Array(
    {id: 1 , name: 'Superman', type: 'Flying', feePerMin: 100},
    {id: 2 , name: 'Batman', type: 'Flying', feePerMin: 120},
    {id: 3 , name: 'Ironman', type: 'Metal', feePerMin: 130},
    {id: 4 , name: 'X-man', type: 'Mutant', feePerMin: 140},
    {id: 5 , name: 'Antman', type: 'Insect', feePerMin: 150}
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

// Flying type heros
let filteredHeros = new Array()

// Imperative 
for (let index = 0; index < heros.length; index++) {
    if(heros[index].type === 'Flying' && heros[index].feePerMin > 100){
        console.log(heros[index])
    }
}

// Declarative
filteredHeros = heros.filter(function(hero){
    return hero.type === 'Flying' && hero.feePerMin > 100
});

console.log(filteredHeros)


// ** First exercise ** //

// Filter numbers larger than 50.
let numbers = new Array(15, 25, 35, 45, 55, 65, 75, 85, 95);

let filteredNumbers = numbers.filter(function(number){
    return number > 50
});

console.log(filteredNumbers)


// ** Second exercise ** //

// Filter users having admin right.
let users = new Array(
    {id: 1, admin: true},
    {id: 2, admin: false},
    {id: 3, admin: false},
    {id: 4, admin: false},
    {id: 5, admin: true}
);

let filteredUsers = users.filter(function(user){
    return user.admin === true
});

console.log(filteredUsers)

// ** Third exercise ** //

// Filter writer by writerOfId

commentsPerWriter = function(comments, name){

    searchById = function(heros, name){
        return heros.filter(function(hero){
            return hero.name === name
        });
    }

    let searchedHeroName = searchById(heros, name)

    return comments.filter(function(comment){
        return comment.writerOfId === searchedHeroName[0].id 
    });
};

console.log(commentsPerWriter(comments, 'X-man'))

// ** Forth exercise ** //

// Implement reject()

numbers = [10, 20, 30];

reject = function(numbers, func){
    return numbers.filter(func)
}

let lessThanFifteen = reject(numbers, function(number){
    return !(number > 15);
});


console.log(lessThanFifteen)