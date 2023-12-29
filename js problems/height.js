// function maxInArray(numbers){

//     console.log('array:', numbers);


// }
// const heights = [167, 190, 120, 165, 137];
// const tallest = maxInArray(heights);

// console.log('tall:', tallest);



// function maxInArray(numbers){

//    for(let i = 0; i < numbers.length; i++){



//     let largest = number[0];
//     const index = i;
//     const element = numbers[index];
//     console.log(element);
//     if(element > largest){
//         largest = element;
//     }
//     return largest;
//    }


// }
// const heights = [167, 190, 120, 165, 137];
// const tallest = maxInArray(heights);

// console.log('tall:', tallest);




// function maxInArray(numbers){

//     for(let i = 0; i < numbers.length; i++){



//      let largest = numbers[0];
//      const index = i;
//      const element = numbers[index];
//      console.log(element);
//      if(element > largest){
//          largest = element;
//      }
//      return largest;
//     }


//  }
//  const heights = [167, 190, 120, 165, 137];
//  const tallest = maxInArray(heights);

//  console.log('tall:', tallest);











// function maxInArray(numbers) {
//     let largest = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {



//         const index = i;
//         const element = numbers[index];

//         if (element > largest) {
//             largest = element;
//         }
        
//     }

//     return largest;
// }
// const heights = [197, 190, 120, 165, 137, 269];
// const tallest = maxInArray(heights);

// console.log('tall:', tallest);







//etai ektu bhul thakte pare ans hove 269 kintu 167 holo ager ta check korte hove

function maxInArray(numbers) {
    
    for (let i = 0; i < numbers.length; i++) {

        let largest = numbers[0];

        const index = i;
        const element = numbers[index];

        if (element > largest) {
            largest = element;
        }
        return largest; 
    }

    
}
const heights = [197, 190, 120, 165, 137, 269];
const tallest = maxInArray(heights);

console.log('tall:', tallest);