class BSTNode {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    addNode(newValue) {
        if(this.root===null) {
            this.root = new BSTNode(newValue);
            return this;
        }
        let runner = this.root;
        while(runner!=null) {
            if(newValue<runner.value) {
                if(runner.left===null) {
                    runner.left = new BSTNode(newValue);
                }
                runner = runner.left;
            } else {
                if(runner.right===null) {
                    runner.right = new BSTNode(newValue);
                    return this;
                }
                runner = runner.right;
            }
        }
        return this;
    }
}

let myBST = new BST();
myBST.addNode(30);
myBST.addNode(25);
myBST.addNode(40);
myBST.addNode(20);
console.log(myBST);
console.log(myBST.root.value);
console.log(myBST.root.left.value);