/*Write a program that will print all the numbers 
from 1 to 135 AND the sum of the numbers that have been printed so far. */
//foor loop that count all the number 
//storing a variable to store in my result
//stoping foor loop when the number become 135 
//printing the number 
let sum = 0
for(let i=1 ; i <= 135; i++){
    sum = sum + i
    console.log("Number is:"+ i +" Sum: "+ sum)
}
