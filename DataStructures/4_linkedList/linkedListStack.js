import { LinkedListTail } from "./linkedListTail.js";

class LinkedListStack{
    constructor(){
        this.list = new LinkedListTail();
    }
    
    push(value){
        this.list.prepend(value);
    }
    
    pop(){
        this.list.removeFromEnd();
    }

    peek(){
        return this.list.head.value;
    }

    isEmpty(){
       return this.list.is();
    }

    getSize(){
       return this.list.getSize();
    }

    print(){
        this.list.print();
    }

}


const stack = new LinkedListStack();

console.log("print method---------------------------");
stack.print()
console.log("add 10,20,30 using push method--------------");
stack.push(10);
stack.push(20);
stack.push(30);
console.log("print method---------------------------");
stack.print();
console.log("remove last element using pop--------------");
stack.pop();
console.log("peek method----------------------------");
console.log(stack.peek());
console.log("isEmpty method----------------------------");
console.log(stack.isEmpty());
console.log("getSize method----------------------------");
console.log(stack.getSize());
console.log("print method---------------------------");
stack.print();

