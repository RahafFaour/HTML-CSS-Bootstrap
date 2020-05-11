/*4. Fibonacci

For a fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.
A Fibonacci sequence is an infinite series of numbers that is created by adding the 
last two numbers in the series. A series would start with the numbers 0 and 1 in place, 
followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.
0 1 1 2 3 5 8 13 21... */
let fibonacci = []
fibonacci[0] = 0
fibonacci[1] = 1
for(let i = 2; i<= 10; i++) {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]
}
console.log(fibonacci)
/*or this 
let a = 0, b = 1, c = b
for(let i = 0; i<= 10; i++) {
    console.log(a)
    c = a + b
    a = b
    b = c
}
*/