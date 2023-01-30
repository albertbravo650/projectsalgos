class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
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
}