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

    //graph.setStart("Kyle");
   // graph.setEnd("Carol");

    graph.breadthFirstSearch("Martin","Carol")

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



Graph.prototype.breadthFirstSearch = function(start, end){
    var queue = [];

    // Doesnt validate if these are in the graph
    var start = this.graph[start];
    var end = this.graph[end];

    // Start with this node
    queue.push(start);

  // While there are still nodes to search
  while (queue.length > 0) {

    // Look at the next node
    var current = queue.shift();

    // If we're done!
    if (current == end) {
          console.log(`Found: ${current.value}`);
          // Make the path from start to end
          var path = [];

          path.push(end);
          //follow the parents
          var next = end.parent;
          while(next != null){
              path.push(next);
              next = next.parent;
          }
          // An array to print out the path
          var arr = path.map(function(n){
            return n.value;
          })
          console.log(arr);
          break;
      }

    // We haven't found the start == end, check the edges
    // If not already checked
    if (!current.searched) {
      // Check the edges
      var edges = current.edges;
      for(var i = 0; i<edges.length; i++){
          // For each neighbor
          var neighbor = edges[i];
          // if it hasn't been searched
          if(!neighbor.searched){
              // set the parent relationship
              neighbor.parent = current;
              // add it to the queue
              queue.push(neighbor);
          }
      }
      // Mark this node as searched
      current.searched = true;
    }
  }
}

run();