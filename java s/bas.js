const country = 'Bangladesh';

const age = 52;
const isIndependent = true;
const identy = { id: 123, class: 12, name: 'Ajaj'};
const bondu = [15, 17, 19, 21, 13, 23, 25, 11];

function add (num1, num2){

    return num1 + num2;
}

console.log(typeof add);
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof identy);
console.log(typeof bondu);
console.log(country);
console.log(Array.isArray(bondu));
console.log(Array.isArray(age));

console.log(bondu.includes(19));

console.log(bondu.includes(21));

if(bondu.indexOf(252) !== -1){


}

const newBonduAge = [12, 13, 11, 13]
const allBondu = newBonduAge.concat(bondu);
console.log(allBondu);
