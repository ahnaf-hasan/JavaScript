// function isLeapYear(year) {

//     const remainder = year % 4;
//     if (remainder === 0) {

//         console.log('leap year', year);

//     }
//     else {

//         console.log(' not leap year', year);

//     }
// }

// isLeapYear(2024);



function isLeapYear(year) {

    const remainder = year % 4;
    if (remainder === 0) {

        // console.log('leap year', year);

        return true;

    }
    else {

        // console.log(' not leap year', year);

        return false;

    }
}

isLeapYear(2024);
isLeapYear(2025);


const yearIsLeap =  isLeapYear(2024);
console.log('year:',yearIsLeap);
 const yearNotLeap = isLeapYear(2025);
 console.log( 'year:', yearNotLeap);