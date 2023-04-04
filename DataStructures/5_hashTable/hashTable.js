
class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for(let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        this.table[index] = value;
    }

    get(key) {
        const index = this.hash(key);
        return this.table[index];
    }

    remove(key) {
        const index = this.hash(key);
        this.table[index] = undefined;
        return `${key} removed`;
    }

    display() {
        for(let i = 0; i < this.table.length; i++) {
            if(this.table[i]) {
                console.log(i,":",this.table[i]);
            }
        }
    }
}

const table = new HashTable(50);
console.log("name age city adds using set method-----------");
table.set("name", "jack");
table.set("age", 30);
table.set("city", "paris");
console.log("display method-----------");
table.display();
console.log("getting name usning get method--------");
console.log(table.get("name"));
console.log("removing name usning remove method--------");
console.log(table.remove("name"));

console.log("display method-----------");
table.display();