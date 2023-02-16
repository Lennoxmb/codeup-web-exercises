const showMultiplicationTable = (num) => {
    for(let i = 1; i <= 10; i++) {
       let result = i * num;
        console.log(`${num} * ${i} = ${result}`)
    }
}
showMultiplicationTable(3)

// jason version
const multipleTable = (number) => {
    let table = '';
    for (let i = 1; i <= 10; i++){
        let daMath = parseInt((number) * i);
        let output = `${number} x ${i} = ${daMath}\n`;
        table = table + output;
    }
    console.log(table)
}
multipleTable();

//2. for loop
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


    for (let i = 1; i <= 10; i++) {
        let randomSum = randomNumber(20, 200)
        if (randomSum % 2 !== 0) {
            console.log(`${randomSum} = odd`)
        } else {
            console.log(`${randomSum} = even`)
        }
    }

// 4
for (let i = 1; i <= 9; i++) {
    let output = `${i}`.repeat(i)
    console.log(output)
}
//jasons loop in a loop
for(let i = 0; i < 9; i++){
    let output = `${i+1}`;
    for(let j = i; j > 0; j--){
        let moNumbers = `${i+1}`;
        output += moNumbers
    }
    console.log(output);
}



//5
for (let i = 100; i >= 0; i -= 5) {
    if (i === 0) break;
    console.log(i)
}
