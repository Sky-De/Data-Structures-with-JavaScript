
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty(){
        return this.root === null;
    }

    insert(value) {
        const newNode = new Node(value);
        if(this.isEmpty()) this.root = newNode;
        else this.insertNode(this.root, newNode);
    }

    insertNode(root, newNode){
        if(newNode.value < root.value){
            if(root.left === null) root.left = newNode;
            else this.insertNode(root.left, newNode);
        }else{
            if(root.right === null) root.right = newNode;
            else this.insertNode(root.right, newNode);
        }
    }

    search(root ,value) {
        if(!root) return false;
        else{
            if(value === root.value) return true;
            else if(value < root.value) return this.search(root.left, value);
            else return this.search(root.right, value);
        }
    }

    preOrder(root) {
        if(root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root) {
        if(root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    postOrder(root) {
        if(root) {
            this.inOrder(root.left);
            this.inOrder(root.right);
            console.log(root.value);
        }
    }

    levelOrder() {
        const queue = [];
        queue.push(this.root);
        while (queue.length) {
            let current = queue.shift();
            console.log(current.value);
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
    }

    min(root) {
        if(!root.left) return root.value;
        else return this.min(root.left);
    }

    max(root) {
        if(!root.right) return root.value;
        else return this.min(root.right);
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {
        if(root === null) return root;
        if(value < root.value) root.left = this.deleteNode(root.left, value);
        else if(value > root.value) root.right = this.deleteNode(root.right, value);
        else{
            if(!root.left && !root.right) return null;
            if(!root.left) return root.right;
            else if(!root.right) return root.left;
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value)
        }
        return root;
    }
}
// review--all
const bst = new BinarySearchTree();
console.log("is Tree empty ?", bst.isEmpty());
console.log("inserting 10, 5, 15 to the tree using inerst method--------------------");
bst.insert(10);
bst.insert(5);
bst.insert(15);
console.log("search for 10,5,15 and 30 using search method------------");
console.log("search for 10", bst.search(bst.root, 10));
console.log("search for 5", bst.search(bst.root, 5));
console.log("search for 15", bst.search(bst.root, 15));
console.log("search for 30", bst.search(bst.root, 30));
console.log("inserting 3, 7 to the tree using inerst method--------------------");
bst.insert(3);
bst.insert(7);
console.log("invoking preOrder method--------------------");
bst.preOrder(bst.root);
console.log("invoking inOrder method--------------------");
bst.inOrder(bst.root);
console.log("invoking postOrder method--------------------");
bst.postOrder(bst.root);
console.log("invoking levelOrder method--------------------");
bst.levelOrder();
console.log("finding min value in tree using min method =>",bst.min(bst.root));
console.log("finding max value in tree using min method =>",bst.max(bst.root));
console.log("invoking levelOrder method--------------------");
bst.levelOrder();
console.log("deleting 5 usning delete method----------------");
bst.delete(5);
console.log("invoking levelOrder method--------------------");
bst.levelOrder();

