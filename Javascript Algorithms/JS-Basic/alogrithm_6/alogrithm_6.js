/*6. Get Average
Given an array X, write a program that will return the average value of all elements in the array. 
For example, for array X = [2,1,3] your output should be 2. */
//I should first  discover elements sum 
// Then finding the length
//To find average i should division the sum by length
const x = [2,1,3]
let sum = x[0] 
let average = 0
const arrayLength = x.length
for (let i = 1; i < x.length; i++) {
     sum = sum + x[i]
}
average = sum/arrayLength
console.log(average)
