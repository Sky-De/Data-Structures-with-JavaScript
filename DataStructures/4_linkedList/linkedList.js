
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

    print(){

        if(this.isEmpty()){
            console.log("List is empty");
            return
        }

        let current = this.head;
        let listValues = "";
        while (current) {
            listValues += ` ${current.value}`;
            current = current.next;
        }
        console.log(listValues);
    }
}


const list = new LinkedList();
console.log("is list empty ?", list.isEmpty());
console.log("list size :", list.getSize());
console.log("print method");
list.print()
console.log("prepend 10 using prepend method");
list.prepend(10);
console.log("print method");
list.print()
console.log("prepend 20 using prepend method");
list.prepend(20);
console.log("print method");
list.print()
console.log("prepend 30 using prepend method");
list.prepend(30);
console.log("print method");
list.print()