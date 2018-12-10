function oldWayOfGetYear(){
    var year = new Date().getFullYear();
    console.log('This year is '+ year);
}

function newWayOfGetYear(){
    console.log(`This year is ${new Date().getFullYear() + 1}`);
}

oldWayOfGetYear();
newWayOfGetYear();