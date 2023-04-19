
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(this.adjacencyList[vertex]) return `this vertex = ${vertex} already exists`
        this.adjacencyList[vertex] = new Set();
    }

    addEdge(vertex1, vertex2) {
        if(!this.adjacencyList[vertex1]) this.addVertex(vertex1);
        if(!this.adjacencyList[vertex2]) this.addVertex(vertex2);
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

    hasEdge(vertex1, vertex2) {
        return this.adjacencyList[vertex1].has(vertex2);
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + " --> " + [...this.adjacencyList[vertex]]);
        }
    }
}

const graph = new Graph();
console.log("adding A B C as vertexs using addVertext method---");
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
console.log("adding edge (A --- B) from A to B and (B --- C) from B to C as edges using addEdge method---");
graph.addEdge("A","B");
graph.addEdge("B","C");
console.log("display list using display method----");
graph.display();
console.log("checking edge between A and B using hasEdge method ---->", graph.hasEdge("A","B"));
console.log("checking edge between A and C using hasEdge method ---->", graph.hasEdge("A","C"));


