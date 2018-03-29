var movies = [
        {
            "title": "Diner",
            "cast": [
                "Kyle",
                "Martin",
                "Phil",
                "Jessie",
                "Mary",
                "Lily"
            ]
        },
        {
           "title": "Cars Going Fast",
            "cast": [
                "Patricia",
                "Jessie",
                "Mary",
                "Lily"
            ] 
        },
        {
            "title": "Really Good Times",
            "cast": [
                "Dennis",
                "Patricia",
                "Carol"
            ]
        }    
]


function run(){
    graph = new Graph();
    for(var i = 0; i<movies.length; i++){
        var movie = movies[i].title;
        var cast = movies[i].cast;
        var movieNode = new Node(movie);
        graph.addNode(movieNode);

        for(var j = 0; j<cast.length; j++){
            var actor = cast[j];
            var actorNode = graph.getNode(actor);
            if(actorNode == undefined){
                actorNode = new Node(actor);
            }
            graph.addNode(actorNode); 
            movieNode.addEdge(actorNode);
        }
    }

    graph.setStart("Kyle");
    graph.setEnd("Carol");

    console.log(graph)
}

function Node(val){
    this.value = val;
    this.edges = [];
    this.parent = null;
    this.searched = false;
}

Node.prototype.addEdge = function(neighbor){
    this.edges.push(neighbor);
    neighbor.edges.push(this);
}

function Graph(){
    this.nodes = []; // not part of graph structure, just in case we need to look at all nodes
    this.graph = {};
}

Graph.prototype.addNode = function(n){
    this.nodes.push(n); // just an array, extra, not part of a graph structure
    var title = n.value;
    this.graph[title] = n; // adding a property, the title, to the graph
}

Graph.prototype.getNode = function(actor){
    var n = this.graph[actor];
    return n;
}

Graph.prototype.setStart = function(actor){
    //if(this.graph[actor]) //check if the actor is in the graph at all
    this.start = actor;
}

Graph.prototype.setEnd = function(actor){
    this.end = actor;
}

function breadthFirstSearch(){
    // Start with this node
    queue.push('you');

  // While there are still nodes to search
  while (queue.length > 0) {

    // Look at the next node
    var person = queue.shift();

    console.log(person);

    // If not already checked
    if (!searched[person]) {
      // If we're done!
      if (isEnd(person)) {
        // Figure out the path by going backwards through parent nodes
        var path = [person];
        var next = parents[person];
        while (next) {
          path.push(next);
          next = parents[next];
        }
        // Print out the path
        console.log(path);
        break;
      } else {
        // Look at node's neighbors
        var next = graph[person];
        for (var i = 0; i < next.length; i++) {
          // Place them all in the queue and update parent
          var neighbor = next[i];
          queue.push(neighbor);
          parents[neighbor] = person;
        }
        // Mark that node as searched
        searched[person] = true;
      }
    }
  }
}

run();