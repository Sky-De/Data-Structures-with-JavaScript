
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
    // O(1)
    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()) this.head = node;
        else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    // O(n)
    append(value){
        const node = new Node(value);
        if(this.isEmpty()) this.head = node;
        else{
            let pre = this.head;
            while (pre.next) {
                pre = pre.next;
            }
            pre.next = node;
        }
        this.size++
        return [value,"added to the end of list"]
    }

    insert(value, index) {
        if(index < 0 || index > this.size) {
            console.log(`index (${index}) is not valid`);
            return
        };
        if(index === 0) {
            this.prepend(value);
            return
        }
        const node = new Node(value);
        let pre = this.head;
        for (let i = 0; i < index -1 ; i++) {
            pre = pre.next;
        }

        node.next = pre.next;
        pre.next = node;
        this.size++
    }  

    removeFrom(index){
        if(index < 0 || index > this.size) return [null,`index ${index} is not valid`];
            
       
        let removeNode;
        if(index === 0){
            removeNode = this.head;
            this.head = this.head.next;
        }else{
            let pre = this.head;
            for(let i = 0; i < index - 1; i++){
                pre = pre.next;
            }
            removeNode = pre.next;
            pre.next = removeNode.next;
        }
        this.size--;
        return [`value removed from index ${index} =>`,removeNode.value];

    }

    removeValue(value){
        if(this.isEmpty()) return [null,"list is empty"];
        if(this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return ["removed value =>",value]
        }
        let pre = this.head;
        while (pre.next && pre.next.value !== value ) {
            pre = pre.next;
        }
        if(pre.next) {
            const removedNode = pre.next;
            pre.next = removedNode.next;
            this.size--;
            return ["removed value=>",value]
        }

        return [null,"value dose not exist in list"];
        
    }

    search(value){
        if(this.isEmpty()) return [`there is not any ${value} in list`,-1];
        let current = this.head;
        let index = 0;
        while(current){
            if(current.value === value) return ["value is in index =>",index];
            current = current.next;
            index++
        }
        return [`there is not any ${value} in list`,-1];
    }

    reverse() {
        let pre = null;
        let current = this.head;
        while(current) {
            let next = current.next;
            current.next = pre;
            pre = current;
            current = next;
        }
        this.head = pre;
        return ["List reversed"]
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
list.print();
console.log("prepend 10 using prepend method");
list.prepend(10);
console.log("print method");
list.print();
console.log("prepend 20 using prepend method");
list.prepend(20);
console.log("print method");
list.print();
console.log("prepend 30 using prepend method");
list.prepend(30);
console.log("print method");
list.print();
console.log("insert 40 into index 1 using insert method");
list.insert(40,1);
console.log("print method");
list.print();
console.log("insert 50 into index 0 using insert method");
list.insert(50,0);
console.log("print method");
list.print();
console.log("insert 60 into index -2 using insert method");
list.insert(60,-2);
console.log("print method");
list.print();
console.log("remove index = 3 (20) using removeFrom method :", list.removeFrom(3));
// fixIt-------------------------------------------------------------------------
// console.log("remove index = 5 () using removeFrom method :", list.removeFrom(5));
// console.log("remove index = 4 (null) using removeFrom method :", list.removeFrom(5));
console.log("print method");
list.print();
// console.log("remove index = 3 (20) using removeFrom method :", list.removeFrom(3));

console.log("remove value = 40 using removeValue method :", list.removeValue(40));
console.log("print method");
list.print();
console.log("serach 10 using search() method and shows index of value :", list.search(10));
console.log("serach 800 using search() method and shows index of value :", list.search(800));
console.log("print method");
list.print();
console.log(" list reversed using reverse method", list.reverse());
console.log("print method");
list.print();
console.log("add 60 to the end of list using append method", list.append(60));
console.log("print method");
list.print();