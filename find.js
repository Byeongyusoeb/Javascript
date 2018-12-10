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

let foundHero = heros.find(function(hero){
    // Return the First matched object
    return hero.name === 'Superman'
});

// ** First exercise ** //

// Find writer by writerOfId

commentsPerWriter = function(comments, name){

    searchById = function(heros, name){
        return heros.find(function(hero){
            return hero.name === name
        });
    }

    let searchedHeroName = searchById(heros, name)

    return comments.filter(function(comment){
        return comment.writerOfId === searchedHeroName.id 
    });
};

console.log(commentsPerWriter(comments, 'X-man'))

// ** Second exercise ** //

// Find the user in the users's array who is an admin

let users = [
    {id: 1, admin: false},
    {id: 2, admin: false},
    {id: 3, admin: true}
]

let admin = users.find(function(user){
    return user.admin === true
});

console.log(admin);


// ** Third exercise ** //

// Find the Id who is suitable with given argument 


let ladders = [
    {id:1, height: 20},
    {id:2, height: 25}
]

findWhere = function(ladders, obj){
    return ladders.find(function(ladders){
        return ladders.height === obj.height
    });
}

console.log(findWhere(ladders, { height: 25 }));