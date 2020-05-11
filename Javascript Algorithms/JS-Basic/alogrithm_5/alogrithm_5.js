/*5. Find Max
Given an array X, write a program that would find the maximum value of the array.
Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero. */
//first i should make variable to store the value and to compare it with the next value
//I should make for loop to go throw the array element
//Making if statement to see which element is great
const  X = [1,4,2,12]
let max = X[0]
for(let i = 1; i < X.length; i++){
    if(X[i] > max){
        max = X[i]
    }
}
console.log(max)
