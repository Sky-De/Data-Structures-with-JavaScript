


export const circularQueue = () => {
    class CircularQueue{
    constructor(capacity){
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLenght = 0;
        this.rear = -1;
        this.front = -1;
    }

    isFull(){
        return this.currentLenght === this.capacity;
    }

    isEmpty(){
        return this.currentLenght ===0;
    }

    enqueue(elm){
        if(this.isFull()) return
        this.rear = (this.rear + 1) % this.capacity;
        this.items[this.rear] = elm;
        this.currentLenght += 1;
        if(this.front === -1) this.front = this.rear;
    }

    dequeue(){
        if(this.isEmpty()) return null;
        const item = this.items[this.front];
        this.items[this.front] = null;
        this.front = (this.front + 1) % this.capacity;
        this.currentLenght -= 1;
        if(this.isEmpty()) {
            this.front = -1;
            this.rear = -1;
        }

        return item;
    }

    peek(){
        if(this.isEmpty()) return null;
        return this.items[this.front];
    }

    print(){
        if(this.isEmpty()) return console.log("Queue is empty");
        let i;
        let str = '';
        for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
            str += this.items[i] + " ";  
        }
        str += this.items[i];
        console.log(str);
    }
}

const queue = new CircularQueue(5);
console.log("isEmpty method");
console.log("isEmpty method ==>",queue.isEmpty());
console.log("print method");
queue.print()
console.log("enqueue 10,20,30,40,50 respectively");
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
console.log("print method");
queue.print();
console.log("isFull method ==>",queue.isFull());
console.log("dequeue method ==>",queue.dequeue());
console.log("print method");
queue.print();
console.log("peek method ==>",queue.peek());
console.log("enqueue 60");
queue.enqueue(60);
console.log("print method");
queue.print();

}


