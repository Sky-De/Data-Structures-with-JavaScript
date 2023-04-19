
console.log("Adjacency Matrix-------------------");
// grpah a-b-c
const adjacencyMatrix = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0],
]

console.log("yes=1 , no=0");
//  a-b ? 
console.log("a --- b ? ", adjacencyMatrix[0][1]);
//  b-c ? 
console.log("b --- c ? ", adjacencyMatrix[1][2]);
//  a-c ? 
console.log("a --- c ? ", adjacencyMatrix[2][2]);
//  b-b ? 
console.log("b --- b ? ", adjacencyMatrix[1][1]);


console.log("Adjacency List-------------------");
// grpah a-b-c
const adjacencyList = {
    'A' : ['B'],
    'B' : ['A','C'],
    'C' : ['B'],
}

console.log("Adjacency List of A =>" , adjacencyList['A']);
console.log("Adjacency List of B =>" , adjacencyList['B']);
console.log("Adjacency List of C =>" , adjacencyList['C']);


