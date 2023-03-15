
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()) this.head = node;
        else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
}


const list = new LinkedList();
console.log("is list empty ?", list.isEmpty());
console.log("list size :", list.getSize());
console.log("prepend 10 20 30 respectively");
list.prepend(10);
list.prepend(20);
list.prepend(30);
