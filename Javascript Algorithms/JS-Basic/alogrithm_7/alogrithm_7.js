/*7. Eliminate the Negatives
Given an array X, write a program that will remove all negative numbers and replace them with a 0. 
For example, for array X = [2,-1,4,-3] the output of your program should be [2,0,4,0]. */
//I should see if the array element smaller than 0 and then replace it with 0
const x = [2, -1, 4, -3]
let zero = 0
for(let i = 0; i < x.length; i++) {
    if(x[i] < 0) {
        x[i] = zero
    }
}
console.log(x)