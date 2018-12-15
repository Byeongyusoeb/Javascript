// double fat arrow => currying

add = x => y => x + y // Looks like asynchronous...

const request = defaults => options => {
    options = Object.assign(
        {}, defaults, options
    );

    return fetch(options.url, options)
    .then(resp => resp.json())
}

// shopping mall, items, discounts, tax

const items = [
    {
        price: 100,
        name: 'shoes',
        weight: 10,
        size: 30
    },
    {
        price: 50,
        name: 'clothes',
        weight: 10,
        size: 30
    },
    {
        price: 30,
        name: 'toy car',
        weight: 10,
        size: 30
    },
    {
        price: 150,
        name: 'water',
        weight: 10,
        size: 30
    },
]

// total amount

const map = fn => array => array.map(fn);

const pluck = key => object => object[key]

const multiply = x => y => x * y

const tax = multiply(1.1);

const discount = multiply(0.98);

const customRequest = request({
    headers: {'X-Custom': 'mykey'}
})

customRequest({
    url: '/cart/items'
})
.then(map(plcuk('price'))) // [100, 50, 30, 150]
.then(map(discount)) // [98, 49, 29.5, 147]
.then(map(tax)) // [107.8, 53.9, 32.4]