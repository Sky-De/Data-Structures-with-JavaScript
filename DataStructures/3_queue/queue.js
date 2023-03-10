

export const queue = () => {

        class Queue{
        constructor(){
            this.items = [];
        }
    
        enueue(elm){
            this.items.push(elm);
        }
    
        dequeue(){
           return this.items.shift();
        }
    
        isEmpty(){
            return this.items.length === 0;
        }
    
        peek(){
            if(this.isEmpty()) return null;
            return this.items[0];
        }
    
        size(){
            return this.items.length;
        }
    
        clear(){
            this.items = [];
            return "Queue Cleared"
        }
    
        print(){
            if(this.isEmpty()) console.log("this queue is empty");
            console.log(this.items.toString());
        }
    
    
    }


    const queue = new Queue();
    
    console.log("Print method");
    queue.print();
    console.log("Enueue method add number 1,2,3,4,5 respectively using Enqueue method");
    queue.enueue(1);
    queue.enueue(2);
    queue.enueue(3);
    queue.enueue(4);
    queue.enueue(5);
    console.log("Print method");
    queue.print();
    console.log("Dequeue method called ==>",queue.dequeue());
    console.log("Print method");
    queue.print();
    console.log("Peek method==>",queue.peek());
    console.log("Size method==>",queue.size());
    console.log("Clear method==>",queue.clear());
    console.log("Print method");
    queue.print();
    console.log("due to using shift for dequeue method, it has Linear Time Complexity ==> Big-O = O(n)");
}