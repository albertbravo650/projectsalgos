// practice on main branch
// 2nd commit

var myArr = [42,"hi"]; // myArr.length == 2
myArr.push(true); // myArr == [42,"hi",true] and length == 3
myArr[myArr.length+1] = 2; // myArr == [42,"hi",true,undefined,2]
console.log(myArr.length); // "5", although we set only 4 values
myArr.pop(); // myArr == [42,"hi",true,undefined]
console.log(myArr.length); // "4", although we never set myArr[3]