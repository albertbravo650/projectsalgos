// var firstName = "Albert";
// var lastName = "Bravo";
// var age = 26;
// console.log(firstName + " " + lastName);

// var myArr1 = [];

// myArr1.push(10);
// console.log(myArr1);

// myArr1.push(100);
// console.log(myArr1);

// myArr1.push(1000);
// console.log(myArr1);

// var myString = "Hello!!";
// var someChar = myString.charAt(4);
// console.log(someChar);
// console.log(myString[4]);

// for(i=0; i<myArr1.length; i++) {
//     console.log(myArr1[i]);
// }

var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0, 2, 1, 3, -12];

for(i=0; i<numbers.length; i++) {
    if(numbers[i]>0) {
        countPositives++;
    }
}

console.log("there are " + countPositives + " positive values");