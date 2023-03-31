import { LinkedListTail } from "./linkedListTail.js";

class LinkedListQueue{
    constructor(){
        this.list = new LinkedListTail();
    }

    enqueue(value){
        this.list.append(value);
    }

    dequeue(){
        this.list.removeFromFront();
    }

    peek(){
        return this.list.head.value;
    }

    isEmpty(){
        return  this.list.isEmpty();
    }

    getSize(){
        return this.list.getSize();
    }

    print() {
        return this.list.print();
    }
}

const queue = new LinkedListQueue();
console.log("isEmpty method---------------------");
console.log(queue.isEmpty());
console.log("adding 10,20,30 to the end of queue using enqueue-----");
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log("print method----------------------");
queue.print();
console.log("removing first element of queue using dequeue-----");
queue.dequeue();
console.log("print method----------------------");
queue.print();
console.log("peek method----------------------");
console.log(queue.peek());
console.log("getSize method----------------------");
console.log(queue.getSize());
