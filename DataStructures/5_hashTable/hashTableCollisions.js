
// Big-O = O(n) linear Time Complexity
class HashTableCollisions {
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
        const bucket = this.table[index];
        if(!bucket){
            this.table[index] = [[key, value]]
        }else{
            const sameKeyItem = bucket.find( item => item[0] === key);
            if(sameKeyItem){
                sameKeyItem[1] = value;
            }else {
                bucket.push([key, value])
            }
        }
    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if(bucket){
            const sameKeyItem = bucket.find( item => item[0] === key);
            if(sameKeyItem) return sameKeyItem[1];
        }
        return [undefined, `there is no key = ${key} in list`]
    }

    remove(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if(bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key);
            if(sameKeyItem) {
                bucket.splice(bucket.indexOf(sameKeyItem), 1);
                if(bucket.length === 0) this.table[index] = undefined;
                return [`item with key = ${key} removed from array`]
            }
        }
        return `there is no key = ${key} in list`
    }

    display() {
        for(let i = 0; i < this.table.length; i++) {
            if(this.table[i]) {
                console.log(i,":",this.table[i]);
            }
        }
    }
}

const table = new HashTableCollisions(50);
console.log("name age gae city adds using set method-----------");
table.set("name", "jack");
table.set("age", 30);
table.set("gae", "test");
table.set("city", "paris");
console.log("display method-----------");
table.display();
console.log("getting name usning get method--------");
console.log(table.get("name"));
console.log("removing age usning remove method--------");
console.log(table.remove("age"));
console.log("display method-----------");
table.display();
console.log("overwrite age to 60");
table.set("name", "joe");
console.log("display method-----------");
table.display();
console.log("removing city usning remove method--------");
console.log(table.remove("city"));
console.log("display method-----------");
table.display();
