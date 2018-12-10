// Going to learn forEach

let numbers = new Array(1, 2, 3, 4, 5)
let sum = 0

// OOP
// Imperative, how-to, step by step
for (let i =0; i <numbers.length; i++){
    sum += numbers[i]
}
console.log(sum)

// FRP
// Declarative, show me what I want
function adder(number){
    sum += number
}

numbers.forEach(adder);
console.log(sum)

// ** First exercise ** //

// Re-write the code 'Imperative for iterator' to 'Declarative for iterator'

function newsDelivery() {
    let news = new Array(
        {id : 13, title : 'President Moon visits China'},
        {id : 22, title : 'Bitcoin will be break ATH'},
        {id : 55, title : 'Japan got suck'}
    );

    let newsDatabase = new Array();

    function saveNews(item) {
        newsDatabase.push(item);
    };

    // for (let index = 0; index < news.length; index++) {
    //     saveNews(news[index])
    // }

    news.forEach(function(value, index) {
        saveNews(value)
    })

}

newsDelivery();



// ** Second exercise ** //

// Write code that print out area with images object

let images = new Array(
    {height: 10, width: 30},
    {height: 20, width: 90},
    {height: 54, width: 32},
)

// area = image.height * image.width
let areas = new Array()

for (let index = 0; index < images.length; index++) {
    areas.push(images[index].height * images[index].width)
}

images.forEach(function(value, index) {
    areas.push(value.height * value.width) 
});