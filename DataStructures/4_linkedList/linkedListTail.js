
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
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

    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
        return [value,"added to the front of list"];
    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
        return [value,"added to the end of list"]
    }

    removeFromFront(){
        if(this.isEmpty()) return [null,"list is empty"];
        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return [value,"removed from list"];
    }

    removeFromEnd(){
        if(this.isEmpty()) return [null,"list is empty"];
        const value = this.tail.value;
        if(this.size === 1){
            this.head = null;
            this.tail = null;
        }else{
            let pre = this.head;
            while (pre.next !== this.tail) {
                pre = pre.next;
            }
            pre.next = null;
            this.tail = pre;
        }
        this.size--;
        return [value,"removed from end of list"]
    }
}

// append-review 
const list = new LinkedList();
console.log("10,20,30 added to front of list using prepend method-----------------");
console.log(list.prepend(10));
console.log(list.prepend(20));
console.log(list.prepend(30));
console.log("print method---------------------------------------------------------");
list.print();
console.log("60 added to end of list using append method--------------------------");
console.log(list.append(60));
console.log("print method---------------------------------------------------------");
list.print()
console.log("removeFromFront method------------------------------------------------");
console.log(list.removeFromFront());
console.log("print method---------------------------------------------------------");
list.print()
console.log("removeFromEnd method--------------------------------------------------");
console.log(list.removeFromEnd());
console.log("print method---------------------------------------------------------");
list.print()