class Graph {
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(v){
        if (this.adjacencyList[v]){
            return null;
        }
        this.adjacencyList[v] = [];

        /* OR
        if (!this.adjacencyList[v]){
            this.adjacencyList[v] = [];
        }
        */
    }

    addEdge(v1, v2){
        if (this.adjacencyList[v1] && this.adjancencyList[v2]){
            this.adjacencyList[v1].push(v2);
            this.adjacencyList[v2].push(v1);
        }
        else {
            return null;
        }
        // To change to directed-graph, only have the vertex push to ONE array, not both
        // This is a undirected graph so we are connecting BOTH vertices
    }

    removeVertex(){

    }

    // filter method creates a new array with all elements that pass the test implemented by the provided function
    removeEdge(v1, v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
    }

    recurseDFS(v){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;                   // this preserves 'this.adjacencyList'

        var dfs = function(vertex){
            if (!vertex){
                return null;
            }
            visited[vertex] = true;                 // add the current vertex to visited so you don't come back to it
            result.push(vertex);
            adjacencyList[vertex].forEach(function(neighbor){                // iterate through each of the edges of the vertex
                if (!visited[neighbor]){                    // you want to visit the neighbors that HAVEN'T been visited
                    return dfs(neighbor);
                }
            })
        }
        dfs(v);
        return result;
    }

    iterateDFS(v){
        const result = [];
        const visited = {};
        const stack = [v];
        visited[v] = true;
        let currentVertex;

        while (stack.length > 0){
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(function(neighbor) {
                if (!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            })
        }
        return result;
    }

    breadthFirst(v){
        const result = [];
        const visited = {};
        const queue = [v];
        visited[v] = true;
        let currentVertex;

        while (queue.length > 0){
            currentVertex = queue.shift();
            result.push(currentVertex);
            visited[currentVertex] = true;

            this.adjacencyList[currentVertex].forEach(function(neighbor){
                if (!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }
        return result;
    }
}

let g = new Graph();
g.addVertex("Andrew");
g.addVertex("Ashley"); 
g.addVertex("Bui");
g.addVertex("Dyna");
g.addEdge("Andrew", "Ashley");
g.addEdge("Andrew", "Bui");
g.addEdge("Andrew", "Dyna");
g.addEdge("Bui", "Dyna");
console.log(g.breadthFirst("Andrew"));