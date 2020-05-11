/*8. Number to String
Write a program that takes an array of numbers and turns the negative values to strings. 
For example, for array X = [1,-4,0,-1] the output should be [1,'Turing,0,'Turing']. */
//I should see if the array element smaller than 0 and then replace it with string value
const x = [1, -4, 0, -1]
const stringValue = 'Turing'
for(let i = 0; i < x.length; i++) {
    if(x[i] < 0) {
        x[i] = stringValue
    }
}
console.log(x)