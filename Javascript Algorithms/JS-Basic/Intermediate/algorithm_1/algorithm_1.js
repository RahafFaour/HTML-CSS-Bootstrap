/*1. Addition

Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5. 
To solve this task you might want to use the modulus operator. */
//Count the number from 200 and 2700
//See if the number divisible by 3 or 5
//Print the result
let addition = 0
for (let i = 200; i <= 2700; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        addition = addition + i
        console.log(addition)
    }
}