// function reverseString(text){
// for(let i = 0; i < text.length; i++){

//     const element = text[i];
//     console.log(element);
// }

// }
// const myString = 'i am a scientist';
// const reversed = reverseString(myString);




// function reverseString(text){
//     for(let i = text.length; i >= 0; i--){
    
//         const element = text[i];
//         console.log(element);
//     }
    
//     }
//     const myString = 'I am a scientist';
//     const reversed = reverseString(myString);






    // function reverseString(text){

    //     let reversed = '';
    //     for(let i = text.length; i >= 0; i--){
        
    //         const element = text[i];
    //        reversed = reversed + element;
    //        console.log(element, reversed);
    //     }
    //     return reversed;

    //     }
    //     const myString = 'I am a scientist';
    //     const reversed = reverseString(myString);

    //     console.log('output:', reversed);










        function reverseString(text){

            let reversed = '';
            for(let i = text.length-1; i >= 0; i--){
            
                const element = text[i];
               reversed = reversed + element;
               console.log(element, reversed);
            }
            return reversed;
    
            }
            const myString = 'I am a scientist';
            const reversed = reverseString(myString);
    
            console.log('output:', reversed);