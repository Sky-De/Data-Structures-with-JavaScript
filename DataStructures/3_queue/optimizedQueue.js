

export const optimizedQueue = () => {

        class Queue{
        constructor(){
            this.items = {};
            // trackers
            this.rear = 0;
            this.front = 0;
        }
    
        enueue(elm){
            this.items[this.rear] = elm;
            this.rear++;
        }
    
        dequeue(){
            const item = this.items[this.front];
            delete this.items[this.front];
            this.front++
           return item;
        }
    
        isEmpty(){
            return this.rear - this.front === 0;
        }
    
        peek(){
            if(this.isEmpty()) return null;
            return this.items[this.front];
        }
    
        size(){
            return this.rear - this.front;
        }
    
        print(){
            if(this.isEmpty()) console.log("this queue is empty");
            console.log(this.items);
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
    console.log("due to using object, it has Constant Time Complexity ==> Big-O = O(1)");
}