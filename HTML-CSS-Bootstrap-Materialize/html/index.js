


// var firstName = "Rahaf"
// var lastName = "Faour"
// var rahafAge = 23

// if (rahafAge >= 23 || lastName == "Faour") {
//     console.log("Yes Rahaf is 23")
// }
// else {
//     console.log("No Rahaf is not 23")
// }
// console.log("It is outside if statment")
// var name = "Rahaf"
// var year = 2020;
// var myAge =23;

// var calulator = year - myAge;
// console.log(name + " is in " + calulator + " born");

// var name = "Mohamad"
// var year = 2020;
// var myAge =33;
// var calulator = year - myAge;
// console.log(name + " is in " + calulator + " born");

// function thisYear() {
//     var year = 2020;
//     console.log(year);
// }
// //This is expraction
// var thisFunction = function (name, year, myAge) {
//     var calulator = year - myAge;
//     console.log(name + " is born in " + calulator);
// }
// //This is statment
// function calulatorYear(name, year, myAge) {
//     var calulator = year - myAge;
//     console.log(name + " is born in " + calulator);
// }

// calulatorYear("Rahaf", 2020, 23);
// calulatorYear("Mohammad", 2020, 33);
// thisFunction("Rahaf", 2020, 23);
// thisYear();
//Array
// var array = ["Rahaf", "Reem", "Adel", "Ahmad", "Rahaf","s"]
// //              0       1       2       3       4
// // console.log(array.length)
// // console.log(array)
// array.unshift("Morad")//putting element first of the array
// array.push("Sayed")
// array.pop()//removing the last element of the array
// array.shift()//removing first element of the array
// array.indexOf("Rahaf")
// for (var index = 0; index <= array.length-1; index++) {
//     console.log(index, " index ")
//     console.log(array[index], " value ");
// }
//object
// var date = new Date()
// console.log(date.getFullYear)
// var information= {
//     firstName: "aboud",
//     lastName: "Mourad",
//     yearOfNow: date.getFullYear,
//     yearofBirth:1988,
//     calulatorYear:function()
//     {
//         var calulator = this.yearOfNow - this.yearofBirth
//         return calulator
//     },
//     isMarried: true,
//     hobby:['sport', 'walk', 'read']
// }
// // information['isMarried'] = false
// information['age']=32
// console.log(information.calulatorYear())
