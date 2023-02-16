let enteredNumber = parseInt(prompt('Give me an odd number between 1 and 50.'))
if (enteredNumber % 2 === 0) {
    console.log("Uh uh uh, you didn't enter an ODD number.")
}
if (enteredNumber % 2 !== 0) {
    for (let i = 1; i < 50; i++) {
        if (i % 2 !== 0) {
            if (i !== enteredNumber) {
                console.log(`Here is number ${i}`)
            }
            else {
                console.log(`Skipping number ${i}`)
            }
        }
    }
}
else {
    console.log("That's not a numeric number, please try again.")
}


