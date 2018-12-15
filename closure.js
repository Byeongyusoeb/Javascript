const createAdder = (x) =>{
    return (y) => x + y;
}

const add3 = createAdder(3);

(add3(2) === 5 ? console.log('ok') : console.log('not ok'))



// ** First exercise ** //

// Refactor below.


const request = (options) => {
    return fetch(options.url, options)
    .then(resp => resp.json())
}

const createRequester = (options) =>{
    return (otherObject) => {
        return request(Object.assign(
            {}, options, otherObject
        ));
    };
};

const customRequest = createRequester({
    headers: { 'X-Custom': 'mykey'}
})

const usersPromise = customRequest({
    url: 'http://jsonplaceholder.typicode.com/posts'
})

console.log(usersPromise)

function add(x){
    return function(y){
        return x + y;
    }    
}

