// const myInches = 64;
// const myFeet = myInches / 64;

// console.log('myFeet');

// console.log(myFeet);


// const dataInches = 64;
// const dadaFeet = dataInches /12;

// console.log(dataInches, dadaFeet);

// const dadiInches = 60;
// const dadiFeet = dadiInches / 12;

// console.log('dadiFeet', dadiInches);

function inchToFeet(inches){

    const feet = inches / 12;

    return feet;
}

const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);

console.log(dadaFeet);


const nanaInches = 168;
const nanaFeet = inchToFeet(nanaInches);

console.log('nanaFeet', nanaFeet);