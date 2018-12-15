function mysteryOperation(nums){
    let sum=0, tally=0;
    for (let i=0; i< nums.length; i++){
        if(nums[i] % 2 === 0){ // isEven
            sum += nums[i]/2 // half
            tally++;
        }
    }

    return sum/tally // toAverage
}

myFuntionalSteryOperation = (nums) =>{
    nums.forEach((num, acc) => {
        (num % 2 === 0 ? acc += num : acc)
        return acc / nums.length
    });
}

console.log(mysteryOperation([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(mysteryOperation([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
