function counter(count) {
    for(var num=1; num<=count; num++) {
        console.log(num);
    }
    newFunction();
}

function newFunction() {
    console.log("Hello this is a new function!");
}

counter(10)