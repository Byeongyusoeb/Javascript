// Asynchronous
// const heroes = [ 'Superman', 'Batman', 'Ironman']

for(let hero of heroes()){
    console.log(hero)
}

function* heroes(){
    // Generate
    // giving a value one by one 
    yield 'Superman';
    yield 'Batman';
    yield 'Ironman';
}

const employees = {
    guard: 'Birdman',
    worker: 'Batman',
    [Symbol.iterator] : function* (){
        yield this.guard;
        yield this.worker;
        yield 14;
        yield 'I am happy'
    }
}

const heroTema = {
    employees,
    members: 10,
    department: 'Earth Cap',
    lead: 'X-man',
    manager: 'Superman',
    [Symbol.iterator] : function* (){
        yield this.members
        yield this.lead;
        yield this.department;
        yield* this.employees;
    }
}

for ( let item of heroTema){
    console.log(item)
}


