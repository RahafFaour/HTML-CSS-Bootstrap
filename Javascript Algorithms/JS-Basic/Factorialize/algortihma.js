/*Declare a function factorialize(n) that takes an integer n as input and returns the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120 */
// function factorial(n) {
//     if (n === 0) {
//         return 1;
//    } else {
//          return n * (factorial(n - 1));
//     }

// }
// console.log(factorial(5));

/*or this 
function factorial(n) {
    var result = 1
    for(var i =1; i<=n; i++) {
        result*=i
    }
    return result
}
console.log(factorial(5))
*/
function factorial(n) {
    var result = 1
    for(var i =n; i>=1; i--) {
        result*=i
    }
    return result
}
console.log(factorial(5))