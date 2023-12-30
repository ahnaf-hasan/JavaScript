// const names = ['nabul', 'sabul', 'tabul', 'naim', 'taim', 'baul', 'wiwmul', 'abdul'];



// function removeDuplicate(names) {

//     for (let i = 0; i < names.length; i++) {

//         const name = names[i];

//         console.log(name);
//     }
// }

// const uniqueNames = removeDuplicate(names);



const names = ['nabul', 'sabul', 'nabul', 'sabul', 'tabul', 'naim', 'taim', 'baul', 'wiwmul', 'baul', 'abdul'];



function removeDuplicate(names) {

    const unique = [];
    for (let i = 0; i < names.length; i++) {

        const name = names[i];

        if (unique.includes(name) === false) {

            unique.push(name);
        }
    }

    return unique;
}

const uniqueNames = removeDuplicate(names);

console.log(uniqueNames);