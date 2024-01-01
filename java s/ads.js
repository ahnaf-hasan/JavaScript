// function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {

//     const perChairWood = 31;

//     const perTableWood = 11;

//     const perBedWood = 13;

//     const chairWood = chairQuantity * perChairWood;

//     const tableWood = tableQuantity * perTableWood;

//     const bedWood = bedQuantity * perBedWood;


//     console.log(chairQuantity, tableQuantity, bedQuantity);

// }

// const totalWood = woodCalculator(7, 3, 5);



function woodCalculator(chairQuantity, tableQuantity, bedQuantity){

    const perChairWood = 4;

    const perTableWood = 13;

    const perBedWood = 53;



    const chairWood = chairQuantity * perChairWood;

    const tableWood = tableQuantity * perTableWood;

    const bedWood = bedQuantity * perBedWood;


    const totalWood = chairWood + tableWood + bedWood;

    return totalWood;

}

const totalWood = woodCalculator(2, 3, 5);

console.log('wood:', totalWood);