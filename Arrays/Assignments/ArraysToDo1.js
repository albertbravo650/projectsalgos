// Push Front
function pushFront(arr, value) {
    for(var i=arr.length-1; i>=0; i--) {
        arr[i+1] = arr[i];
    }
    arr[0] = value;
    console.log(arr);
}

var arr1 = [5,7,2,3];
pushFront(arr1, 8);
var arr2 = [99];
pushFront(arr2, 7);


// Pop Front
// function popFront(arr) {
//     var value1 = arr[0];
//     var newArr = [];
//     for(var i=1; i<arr.length; i++) {
//         newArr.push(arr[i]);
//     }
//     console.log(newArr);
//     console.log(value1);
//     return value1;
// }

// var arr3 = [0,5,10,15];
// popFront(arr3);
// var arr4 = [4,5,7,9];
// popFront(arr4);


// Insert At
// function insertAt(arr, index, value) {
//     var newArr = []
//     for(var i=0; i<index; i++) {
//         newArr.push(arr[i]);
//     }
//     newArr.push(value);
//     for(var i=index; i<arr.length; i++) {
//         newArr.push(arr[i]);
//     }
//     console.log(newArr);
// }

// var arr5 = [100,200,5];
// insertAt(arr5, 2, 311);
// var arr6 = [9,33,7];
// insertAt(arr6, 1, 42);