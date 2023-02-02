class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addToFront(newNode) {
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    addToBack(newNode) {
        if(this.head===null) {
            this.head = newNode;
            return this;
        }
        let curNode = this.head;
        while(curNode.next !== null) {
            curNode = curNode.next;
        }
        curNode.next = newNode;
        return this;
    }

    displayValues() {
        let curNode = this.head;
        while(curNode!==null) {
            console.log(curNode.data);
            curNode = curNode.next;
        }
        return this;
    }
}

let firstNode = new Node(5);
let secondNode = new Node(10);

let mySLL = new SLL();
mySLL.addToBack(firstNode);
mySLL.addToBack(secondNode);
mySLL.addToBack(new Node(20));

mySLL.displayValues();

// console.log(mySLL.head.data);
// console.log(mySLL.head.data);
// console.log(mySLL.head.next.data);


// console.log(mySLL.)