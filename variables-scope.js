// var : Old way 
// let : Mutable variable in the scope below.
// const : Opposite of 'let' [ Immutable ]

// Why is 'State(a value of a variable at a moment) management' important.
// 1. reactive (inner and outer)
// 2. collaboration 
// 3. scope

const statuses =[
    { code: 'OK', response: 'Request successful'},
    { code: 'FAILED', response: 'There was an error with your request'},
    { code: 'PENDING', response: 'Your request is still pending'}
];

let message = '';
const currentCode = 'OK';

statuses.forEach(status => {
    if(status.code === currentCode){
        message = status.response;

        console.log(message);
    }
})


// ** const **

class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    moveBy(dx, dy){
        this.x += dx;
        this.y += dy;
    }
}

const pointA = new Point(0, 0);
const pointB = new Point(0, 0);

console.log(pointA);

pointA.moveBy(3, 5);

console.log(pointA.x, pointA.y);