function largestOfFour(arr) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {

        //It is like a storage for the sub array
        let Max = 0;

        for (let j = 0; j < arr[i].length; j++) {
            if (Max <= arr[i][j]) {
                Max = arr[i][j];
            }
        }

        //Store largest number in new array 
        newarr[i] = Max;
    }
    console.log(newarr)
    return newarr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);