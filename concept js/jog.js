// let sum = 0;

// for(let i =1; i<=7; i++){

//     sum = sum + i;
//     console.log(i,sum);
// }

// function sumOfNumbers(number) {

//     let sum = 0;

//     for (let i = 1; i <= number; i++) {

//         sum = sum + i;
//         console.log(i, sum);
//     }
//     return sum;
// }





// function multiplicationOfNumbers(number){

//     let result = 1;
//     for(let i = 1; i <= 7; i++){

//         result = result * i;

//     }
//     return result;
// }

// const result = multiplicationOfNumbers(9);
// console.log(result);


function factorial(number){

    let result = 1;
    for(let i = 1; i <= number; i++){

        result = result * i;

    }
    return result;
}

const result = factorial(9);
console.log(result);