

// function getOddNumbersOfAnArray(numbers){

//     const oddNumbers = [];

//     for (let i = 0; i < numbers.length; i++){

//         const index = i;
//         const element = numbers[index];
//         if (element % 2 === 1){

//             console.log(index, element);
//             oddNumbers.push(element);
//         }
//     }
//     return oddNumbers;
// }

// const myNumbers = [ 12, 65, 45, 78, 32, 45, 91 ];
// const oddNumbers = getOddNumbersOfAnArray(myNumbers);
// console.log(oddNumbers);
//  const oddNumberSum = getSumOfAnArray(oddNumbers);

//  console.log('odd number sum', oddNumberSum);





function getOddNumbersOfAnArray(numbers) {



    for (let i = 0; i < numbers.length; i++) {

        const index = i;

        const element = numbers[index];
        if (element % 2 !== 0) {

            console.log(index, element);

        }
    }

}









const myNumbers = [12, 65, 45, 78, 32, 45, 91];

getOddNumbersOfAnArray(myNumbers);

getSumOfAnArray(myNumbers);

