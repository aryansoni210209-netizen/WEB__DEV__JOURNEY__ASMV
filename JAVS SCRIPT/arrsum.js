let arr = [1,2,3,4,5,6,7,8];
let sum = 0 ;

let evenSum = arr.reduce(
    function evenSum(sum , val) {
        return val % 2 === 0 ? sum + val : sum;
    } 
    ,0
);

console.log(evenSum); // 20