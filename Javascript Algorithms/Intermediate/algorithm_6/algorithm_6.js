/**6. Communist Censorship

Given the array of strings X = ['Man', 'I','Love','The','Restart','Bootcamp'], replace every letter of the word Bootcamp with *,
so the output would be ['Man', 'I','Love','The','Turing','********']. Then make your algorithm work for any word of your choice */
let array = ['Man', 'I','Love','The','Restart','Bootcamp']
let star = ''

for(let i = array[array.length-1].length; i > 0; i-- ) {
        star = star + '*'
    }
    array[array.length-1] = star

console.log(array)

