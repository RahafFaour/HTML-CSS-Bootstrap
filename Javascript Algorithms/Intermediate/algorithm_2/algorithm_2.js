/*2. Shift the Values

Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front.
When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2]. */
// let array = [2, 1, 6, 4, -7]
// let shiftsAray = array
//     for(let i = array.length-1; i >= 0 ; i--) {
//          shiftsAray[i] =    array[i]
//          console.log(shiftsAray[i])
//     }
const array = [2, 1, 6, 4, -7]

const newArray = []
for (let i = array.length - 1; i >= 0; i--) {
     newArray.push(array[i])
}
console.log(newArray)







