"use strict";

const melonsToAdd = ['Ogen', 'Horned Melon', 'Watermelon', 'Casaba',
'Sharlyn', 'Xigua', 'Ogen', 'Christmas', 'Christmas',
'Christmas', 'Christmas', 'Watermelon', 'Sharlyn', 'Xigua',
'Cantaloupe', 'Christmas', 'Watermelon', 'Christmas',
'Sharlyn', 'Christmas', 'Cantaloupe', 'Casaba', 'Cantaloupe',
'Santa Claus', 'Horned Melon', 'Watermelon', 'Ogen',
'Horned Melon', 'Cantaloupe', 'Xigua', 'Horned Melon', 'Sharlyn',
'Horned Melon', 'Sharlyn', 'Cantaloupe', 'Christmas',
'Horned Melon', 'Horned Melon', 'Horned Melon', 'Xigua', 'Xigua',
'Watermelon', 'Cantaloupe', 'Casaba', 'Cantaloupe', 'Casaba',
'Watermelon', 'Santa Claus', 'Casaba'];

function countMelons(melonList){
    const melonCounts = {};

    for (const melon of melonList) {
        if (melonCounts[melon]){
            melonCounts[melon] += 1;
        } else {
            melonCounts[melon] = 1;
        }
    }
    return melonCounts;
}

console.log(countMelons(melonsToAdd));


// const melonCounts = melonsToAdd.reduce((mCounts, melon) => {
//     if (mCounts[melon]) {
//       mCounts[melon] += 1;
//     } else {
//       mCounts[melon] = 1;
//     }
//     return mCounts;
//   }, {});
  
// console.log(melonCounts);

// https://www.google.com/search?q=reduce+in+javascript&rlz=1C1CHBF_enUS917US917&source=lnms&tbm=vid&sa=X&ved=2ahUKEwiIwc2Lo7n-AhUrj4kEHTCdBH8Q0pQJegQIBRAC&biw=976&bih=796&dpr=1.1#fpstate=ive&vld=cid:f890be46,vid:g1C40tDP0Bk


// const melonCounts = melonsToAdd.reduce((mCounts, melon) => {
//     mCounts[melon] = (mCounts[melon] || 0) + 1;
  
//     return mCounts;
//   }, {});
  
//   console.log(melonCounts);




// const myArray = [1,2,3,4];

// const addToMe = myArray.reduce((adding, number) => {
//     if(adding<4){
//         adding += number;
//     }else{
//         console.log("too high");
//     }
//     return adding
// }, 0);

// console.log(addToMe);



// const megArray = ["loic", "meg", "noemie", "lynn"];

// const uniqueLetters = megArray.reduce((letters, lettre) => {
//     if (letters.includes(lettre[0])){
//         console.log("in there already");
//     }else{
//         letters.push(lettre[0]);
//     };

//     return letters
// }, []);

// console.log(uniqueLetters)