

export const setExample = () => {

     const set = new Set([1, 2, 3]);
     set.add(4);
     // dosen't accept duplicate
     set.add(4);
     set.delete(3);
     console.log("size method",set.size);
     console.log("has method",set.has(4));
     // console.log("clear method",set.clear());

    for (const item of set) {
        console.log(item);
       }

}