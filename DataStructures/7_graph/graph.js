
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

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
        return `edge between ${vertex1} and ${vertex2} removed`
    }
    
    removeVertex(vertex) {
        if(!this.adjacencyList[vertex]) return `there is no ${vertex} as vertex in graph`;
        for (let adjacentVertex of this.adjacencyList[vertex]) this.removeEdge(vertex, adjacentVertex);
        delete this.adjacencyList[vertex];
        return `vertex ${vertex} removed from graph`;

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
// all methods time complexity --> constant
// except removeVertex time complexity --> linear
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
console.log("removing edge between B and C using removeEdge method --->",graph.removeEdge("B","C"));
console.log("display list using display method----");
graph.display();
console.log("removing vertex B from graph using removeVertex method-->",graph.removeVertex("B"));
console.log("display list using display method----");
graph.display();



