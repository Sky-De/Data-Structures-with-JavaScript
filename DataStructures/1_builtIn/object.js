
export const Object = () => {
    
const obj = {
    name: "skyDe",
    birth: "1991",
    "key-three": 12,
    logMyName: function(){
        console.log(this.name)
    },

}
   console.log("obj-------------");
   console.log(obj);

   console.log("add-------------");
   obj.hobby = "chess";
   console.log(obj);
   
   console.log("remove-------------");
   delete obj.birth;
   console.log(obj);
   
   
   console.log("tests-------------");
   console.log(obj.name);
   console.log(obj["birth"]);
   console.log(obj["key-three"]);
   console.log(obj);
   obj.logMyName();
   
   // Object.keys(obj) -- Object.values(obj) -- Object.entries(obj)
   console.log("Time Complexity-------------");
   // insert / remove / access ==> Big-O = O(1) (constant time complexity)
   // Object.keys() -- Object.values() -- Object.entries() ==> Big-O = O(n) (linear time complexity)
   console.log("insert / remove / access ==> Big-O = O(1) (constant time complexity)");
   console.log("Object.keys() -- Object.values() -- Object.entries() ==> Big-O = O(n) (linear time complexity)");

}


