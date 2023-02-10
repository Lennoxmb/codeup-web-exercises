"use strict";
alert("Welcome to my Website!");
let favColor = prompt("What is your favorite color?");
console.log(favColor);
alert(`Cool! My favorite color is ${favColor} too!`);

//number 3 from last one
let movie1 = parseFloat(prompt(`You rented The Little Mermaid. How many day's did you have it?`));
let movie2 = parseFloat(prompt(`You rented Brother Bear. How many day's did you have it?`));
let movie3 = parseFloat(prompt(`You rented Hercules. How many day's did you have it?`));
let pricePerDay = parseFloat(prompt('How much does a movie cost per day?'))
let totalPrice = (movie1 + movie2 + movie3) * pricePerDay;
let totalFormattedPrice = totalPrice.toLocaleString("en-US", {style:"currency", currency:"USD"});
console.log(totalFormattedPrice);
alert(`Your total price for the rental will be ${totalFormattedPrice}`);

//hours worked
let facebook = parseFloat(prompt('You worked for facebook this week. How many hours did you work?'));
let facebookPay = parseFloat(prompt('How much does facebook pay you an hour?'));
let google = parseFloat(prompt(`You worked for Google this week. How many hours did you work?`));
let googlePay = parseFloat(prompt(`Hw much does Google pay you an hour?`));
let amazon = parseFloat(prompt(`You worked for amazon this week. How many hours did you work?`));
let amazonpay = parseFloat(prompt(`How much does Amazon pay you an hour?`));
let facebookTotal = facebook + facebookPay;
let googleTotal = google + googlePay;
let amazonTotal = amazon + amazonpay;
let totalPay = facebookTotal + googleTotal + amazonTotal;
let totalFormattedPay = totalPay.toLocaleString("en-US", {style:"currency", currency:"USD"});
console.log(totalFormattedPay);
alert(`Your total paycheck this week will be ${totalFormattedPay}`);
let totalDed = (totalPay- totalPrice)
let totalFormattedDed = totalDed.toLocaleString("en-US", {style:"currency", currency:"USD"});
alert(`The price for your movie rentals will be taken out automatically from your pay check. You can expect a deposit of ${totalFormattedDed}.`);

//student

let studentSchedule = confirm(`Does this class conflict with your current schedule? If not, click ok!`);
console.log(studentSchedule);
let maxClass = parseInt(prompt(`What is the current size of the class?`));
let availableClass = (maxClass <= 30);
if (availableClass) {
    alert(`Welcome!`)}
    else {
        alert(`sorry we're full!`);
};
    //coupon
let couponValid = confirm(`This product offer is only available if you have a valid coupon. Do you have a valid coupon?`);
let totalItems = parseInt(prompt(`How many items do you have in your cart?`));
let validItems = totalItems >= 2;
let premiumMember = confirm(`Are you a premium member with us?`);
let acceptedCoupon = couponValid && (validItems || premiumMember);
if (acceptedCoupon) {
    alert(`coupon accepted`)
}
else {
    alert(`We can't accept this coupon at this time.`)
};
