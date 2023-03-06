


export const mapExample = () => {
    const map = new Map([["a",1],["b",2]]);
    console.log(map);
    
    console.log("map set method-----set c=3");
    map.set("c",3);
    console.log(map);
    console.log('map has c:',map.has("c"));
    console.log("delete method-----deleting c");
    map.delete("c")
    console.log(map);
    console.log('map has c:',map.has("c"));
    console.log("size method-----size of map=>",map.size);
    console.log("clear method-----");
    // map.clear();
    // console.log(map);
    
    for (const [key,value] of map) {
        console.log(`key:${key}---value:${value}`);    
    }
}