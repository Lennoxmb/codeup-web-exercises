//
// // while(true){
// //     const number = prompt("Enter an odd number:");
// //     if (number % 2 === 1) break;
// // }
//
//
//
// let enteredNumber;
//
// while (true) {
//     enteredNumber = prompt("Enter an odd number between 1 and 50:");
//
//     if (enteredNumber !== null && !isNaN(enteredNumber) && enteredNumber % 2 === 1 && enteredNumber >= 1 && enteredNumber <= 50) {
//         break;
//     } else {
//         alert("Ah ah ah~ That's not an ODD number.");
//     }
// }
//
// for (let i = 1; i <= 50; i += 2) {
//     if (i === parseInt(enteredNumber)) {
//         continue;
//     }
//
//     console.log(i);
// }

//jasons
let userPrompt;
let userPromptNum;
while(true){
   userPrompt = prompt(`1-50`);
   userPromptNum = parseInt(userPrompt);
   if(userPromptNum % 2 === 1 && userPromptNum >= 1 && userPromptNum <= 50){
       break;
   }
}
for(let i = 1; i <= 49; i += 2 ){
if (i === userPromptNum) {
    console.log(`skipping num ${i}`);
    continue;
}
console.log(`${i}`)
}
