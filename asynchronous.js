// Promise : Status {Unresolved : undefined, Resolved : then, Rejected : catch}
// Asynchronous : Not simultaneous or concurrent in time

const promise = new Promise((resolve, reject) =>{
    resolve();
});

console.log(promise);

promise
.then(() => { console.log('first finished') })
.then(() => { console.log('second finished') })
.then(() => { console.log('third finished') })
.then(() => { console.log('fourth finished') })
.catch(()=> { console.log('Something\'s wrong')})


url = 'http://jsonplaceholder.typicode.com/posts'

fetch(url)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Failed due to weak internet connection', error));
