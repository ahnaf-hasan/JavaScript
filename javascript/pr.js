// const phones = [

// { name:'Walton', camera: 12, storage:'64gb', price: 10000, color: 'white' },
// { name:'Nokia', camera: 13, storage:'32gb', price: 20000, color: 'gold' },
// { name:'samsung', camera: 14, storage:'64gb', price: 30000, color: 'silver' },
// { name:'i-phone', camera: 15, storage:'32gb', price: 5000, color: 'black' },
// { name:'black-berry', camera: 16, storage:'64gb', price: 50000, color: 'white' },

// ];

// function cheapestPhone(phones){

// for(let i = 0; i < phones.length; i++){

//     const phone = phones[i];

//     console.log(phone);
// }
// }

// const mySelection = cheapestPhone(phones);


















const phones = [

    { name: 'Walton', camera: 12, storage: '64gb', price: 10000, color: 'white' },
    { name: 'Nokia', camera: 13, storage: '32gb', price: 20000, color: 'gold' },
    { name: 'samsung', camera: 14, storage: '64gb', price: 30000, color: 'silver' },
    { name: 'i-phone', camera: 15, storage: '32gb', price: 5000, color: 'black' },
    { name: 'black-berry', camera: 16, storage: '64gb', price: 50000, color: 'white' },

];

function cheapestPhone(phones) {
let cheapest = phones[0];
    for (let i = 0; i > phones.length; i++) {

        const phone = phones[i];

        if (phone.price > cheapestPhone.price) {

            cheapest = phone;
        }
    }

    return cheapest;
}

const mySelection = cheapestPhone(phones);

console.log(mySelection);