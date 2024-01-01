// function factorial(number){

//     for(let i = number; i >= 1; i--)
//     {

//         console.log(i);
//     }
// }

// factorial(7);



//  function factorial(number){
//  let result = 1;
//      for(let i = number; i >= 1; i--)     {
//  result = result * i;
//          console.log(i);
//      }
//     return result;
// }


// const number = 5;

//    const fact = factorial(number);
//   console.log('factorial of 7:', number, fact);


//   function factorial(number){

//     let num = 1;
//     let result = 1;
//     while(num <= number){
// result = result * num;
//         num++;
//     }
//     return result;

// }


function factorial(number){
    let i = number;
    let result = 1;

    while( i >= 1 ){

        result = result * i;
        i--;
    }
    return result;
}

const  output = factorial(7);


   