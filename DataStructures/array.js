
export const Array = () => {
    let arr = [1,2,3,"SkyDe",true];
    
    console.log("-------------------array");
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    
    console.log("-------------------push/unshift");
    arr.push("pushed");
    arr.unshift("unShifted");
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    
    console.log("-------------------pop/shift");
    arr.pop();
    arr.shift();
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

    //map, filter, reduce, concat, slice, splice, forEach
    
    // Time complexity
    console.log("push / pop ===> Big-O = O(1) constant time complexity ");
    console.log("shift / unshift / concat / slice / splice ===> Big-O = O(n) linear time complexity"); 
    console.log("forEach / map / filter / reduce  ===> Big-O = O(n) linear time complexity"); 
}