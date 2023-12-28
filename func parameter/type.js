// var myPc = {

//     name: 3,
//     processor: 6,
//     price: 90000,
//     add: 5
// }
// var addCount = myPc.add;

// var addCount2 = myPc['add'];

// // var properties = object.keys(myPc);

// // console.log(properties);

// // console.log(myPc);

//  var properties = object.keys(myPc);

//  console.log(properties);




var shoppingCart = {

    books: 3,
    sunglass: 1,

    keyboard: 5,
    mouse: 1,

    pen: 13
}

//specific name you know
var penCount = shoppingCart.pen;
// alternative system 

var penCount2 = shoppingCart['pen'];

// console.log(shoppingCart);

var propertyName = 'mouse';
var propertyName = 'pen';


var propertyValues = shoppingCart[propertyName];

console.log(propertyName, propertyValues);

var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);





// console.log(properties);

//  console.log(propertyValues)


 console.log(shoppingCart);

//set properties value
 shoppingCart.mouse = 15;
console.log(shoppingCart);
shoppingCart['mouse'] = 33;

console.log(shoppingCart);
shoppingCart[propertyName] = 101;

 console.log(shoppingCart);