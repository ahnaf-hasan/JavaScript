// function reverseWords(str){

//     const words = str.split('');

//     console.log(words);

// }

// const myString = 'he is boy';

// reverseWords(myString);



// function reverseWords(str){

//     const words = str.split(' ');

//     const result = [];

//     for(let i = words.length-1; i>=0; i-- ){



//         const element = words[i];

//         result.push(element);

//     }

//     console.log(result);

// }

// const myString = 'he is boy';

// reverseWords(myString);









// function reverseWords(str){

//     const words = str.split('');

//     const result = [];

//     for(let i = words.length-1; i >= 0; i-- ){



//         const element = words[i];

//         result.push(element);

//     }

//     console.log(result);

// }

// const myString = 'he is boy';

// reverseWords(myString);






// function reverseWords(str) {

//     const words = str.split(' ');

//     const result = [];

//     for (let i = words.length - 1; i>=0; i--) {



//         const element = words[i];

//         result.push(element);

//     }
//     const reversed = result.join(' ');
//     return reversed;

// }

// const myString = 'he is boy';

// reverseWords(myString);








function reverseWords(str){

    const words = str.split(' ');

    const result = [];

    for (let i = words.length - 1; i>=0; i--) {



        const element = words[i];

        result.push(element);

    }
    // const reversed = result.join(' ');
    // return reversed;


     console.log(result);
}

const myString = 'he is boy';

reverseWords(myString);