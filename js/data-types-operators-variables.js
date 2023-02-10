let a = 1;
let b = a++;
let c = ++a;
console.log(a)
// 1, 1, 3, a++ happens AFTER the post, c, a=2, b=1, so c=3

let d = "hello";
let e = false;

d++;
e++;
console.log(d)
console.log(e)
//nan nan(wrong, it's nan, 1) false 0 true 1

let perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;
console.log(perplexed)
// NaN can't add something to nothing

let price = parseFloat("2.7");
price.toFixed(2);
console.log(price)
//2.70

isNaN(0)
//false
isNaN(1)
//false
isNaN("")
// false
isNaN("string")
//true
isNaN("0")
//false
isNaN("1")
//false
isNaN("3.145")
//false
isNaN(Number.MAX_VALUE)
//false
isNaN(Infinity)
//false
isNaN("true")
//true
isNaN(true)
//false
isNaN("false")
//true
isNaN(false)
//false
// to illustrate why the isNaN() function is needed:
NaN == NaN
// nan does not equal nan

!true
//false
!false
//true
!!true
//truely true
!!false
//falsey false
!!0
//false
!!-0
//false
!!1
//true
!!-1
//true
!!0.1
//true
!!"hello"
//string is true
!!""
// same
!!''
// same
!!"false"
//same
!!"0"
//same

let sample = "Hello Codeup";
console.log(sample.length);
console.log(sample.toLowerCase());
let sampleJoin = `${sample} Students` // can also do this in a var
console.log(sampleJoin)
let sampleJoinReplace = sampleJoin.replace('Students', 'Class')
console.log(sampleJoinReplace)
let findC = sampleJoinReplace.indexOf("C");
console.log(findC)
console.log(sample.substring(6, 12))

//movies
let littleMermaid = 3
let brotherBear = 5
let hercules = 1
let moviesRented = littleMermaid + brotherBear + hercules
console.log("$" + moviesRented * 3)

//paycheck
let google = 400
let amazon = 380
let facebook = 350
let googlecheck = google * 6
let amazoncheck = amazon * 4
let facebookcheck = facebook * 10
let paycheck = googlecheck + amazoncheck + facebookcheck
let formattedpaycheck = paycheck.toLocaleString("en-US", {style:"currency", currency:"USD"})
console.log(formattedpaycheck)

//class student full
// let codeclass = true
// let schedule = true
// if (codeclass&&schedule)
//     console.log("welcome!")
// else{
//     console.log("try next time")
// }

//better class without if statment
let scheduleconflict = false;
let maxsize = 30;
let currentclasssize = 24;
let canEnroll = !scheduleconflict && currentclasssize < maxsize;
console.log(canEnroll)


// //product offer
// let itemNumber = false
// let validCoupon = true
// let premium = true
// if (itemNumber&&validCoupon||premium)
//     console.log("Coupon used!")
// else{
//     console.log("throw it away")
// }

// class set
let minCartSize = 2;
let cartSize = 3;
let premium = false;
let offerExpired = false;

let canOfferApply = (premium || (cartSize >= minCartSize)) && !offerExpired
console.log(canOfferApply);


// //user and pw
// let username = 'codeup';
// let password = 'notastrongpassword';
// if (password.length>5&&username.length<=20)
//     console.log("accepted")
// else
//     console.log("Need to change something")
// if (password.indexOf(""))
//     console.log("No white space")
// else
//     console.log("accepted")
// if (password.indexOf(username) >= 0);
//     console.log("No using username")
// else
//     console.log ("accepted.")

//class set
let username = 'codeup';
let password = 'notastrongpassword';
let minChar = password.length >= 5;
let noUsername = password.indexOf(username) >= 0;
let maxuserChar = username.length <=20;
let userLength = username.length;
let passLength = password.length;
let firstcharUser = username.substring(0,1);
let lastCharUser = username.substring((userLength - 1), userLength);
let firstcharPass = password.substring(0,1);
let lastcharPass = password.substring((passLength - 1), passLength);

let whitespace = firstcharUser === ' ' || lastcharPass === ' ' || lastCharUser === ' ' || firstcharPass === ' '
console.log(whitespace)
