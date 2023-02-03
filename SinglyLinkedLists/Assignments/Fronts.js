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

    addFront(val) {
        // creating a new node object with the value provided
        let new_node = new Node(val);
        // checking to see if the current list does not have a head node(if the
        // list is empty)
        // if list is empty, place new node as head
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        // if list is not empty, assign head to be the next node to the new node
        new_node.next = this.head;
        // assign new_node to be the new head of the list
        this.head = new_node;
        return this;
    }

    removeFront() {
        if(!this.head) {
            return null;
        }
        let first_node = this.head;
        let next_head = first_node.next;
        // console.log("test", next_head);
        this.head = next_head;
        // next_head = this.head;
        first_node.next = null;
        
        return next_head;
    }

    front() {
        if(!this.head) {
            return null;
        }
        return this.head.data;
    }
}

SLL1 = new SLL();
SLL1.addFront(18);
SLL1.addFront(5);
SLL1.addFront(73);
console.log(SLL1);

SLL1.removeFront();
console.log(SLL1);
SLL1.removeFront();
console.log(SLL1);

let frontVal = SLL1.front();
console.log(frontVal);
SLL1.removeFront();
frontVal = SLL1.front();
console.log(frontVal);
