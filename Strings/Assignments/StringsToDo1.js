// Remove Blanks

function removeBlanks(str) {
    strArray = str.split(" ");
    strArray = strArray.join("");
    return strArray;
}

var string1 = removeBlanks("Hello people how are you today");
console.log(string1);


// Get Digits

// function getDigits(str) {
//     strArray = str.split("");
//     intArray = [];
//     for(i=0; i<strArray.length; i++) {
//         if(!isNaN(strArray[i])) {
//             intArray.push(strArray[i]);
//         }
//     }
//     intArray = intArray.join("");
//     // console.log(typeof(intArray));
//     newInt = Number(intArray);
//     // console.log(typeof(newInt));
//     // console.log(strArray);
//     // console.log(intArray);
//     return newInt;
// }

// var digits1 = getDigits("abc8c0d1ngd0j0!8");
// console.log(digits1);


// Acronyms

// function acronym(str) {
//     var acronym = "";
//     strArray = str.split(" ");
//     for(i=0; i<strArray.length; i++) {
//         if(strArray[i]!=="") {
//             acronym += strArray[i][0].toUpperCase()
//             // console.log(strArray[i][0]);
//         }
//     }
//     console.log(acronym);
//     return acronym;
// }

// acronym(" there's no free lunch - gotta pay yer way. ");
// acronym("Live from New York, it's Saturday Night!")


// Count Non-Spaces

// function countNonSpaces(str) {
//     var count = 0;
//     for(i=0; i<str.length; i++) {
//         if(str[i]!==" ") {
//             count++;
//         }
//     }
//     console.log(count);
//     return count;
// }

// countNonSpaces("Honey pie, you are driving me crazy");
// countNonSpaces("Hello world !");


// Remove Shorter Strings

// function removeShorterStrings(strArray, num) {
//     newArray = [];
//     for(i=0; i<strArray.length; i++) {
//         if(strArray[i].length>=num) {
//             newArray.push(strArray[i]);
//         }
//     }
//     console.log(newArray);
//     return newArray;
// }

// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4);
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3);