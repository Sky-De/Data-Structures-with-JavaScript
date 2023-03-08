
export const stackExample = () => {
    
    class Stack{
        constructor(){
            this.items = [];
        }
    
        push(elm){
            this.items.push(elm)
        }
    
        pop(){
            return this.items.pop()
        }
    
        peek(){
            return this.items[this.items.length -1]
        }
    
        isEmpty(){
            return this.items.length === 0
        }
    
        size(){
            return this.items.length
        }
    
        print(){
            console.log(this.items.toString());
        }
    }
    
    const stack = new Stack();
    console.log("is stack empty?----->",stack.isEmpty());
    console.log("push method---push-20-10-30");
    stack.push(20)
    stack.push(10)
    stack.push(30)
    console.log("is stack empty?----->",stack.isEmpty());
    console.log("print method--------");
    stack.print();
    console.log("pop method-------->",stack.pop());
    console.log("print method--------");
    stack.print();
    console.log("peek method-------->",stack.peek());
    console.log("size method-------->",stack.size());
    
    console.log("why stack ? stack implements LIFO principle ---> always constant time complexity ---> BigO = O(1)");

}