function run(){

    var trie = new Trie();
    trie.insert("cat");
    trie.insert("car");
    trie.insert("cab");
    trie.insert("bat");
    trie.insert("ball");

    console.log(trie);

    // check contains method
    console.log(trie.contains("car"));  // true
    console.log(trie.contains("ba")); // false
    console.log(trie.contains("asd")); // false

    // check find method
    console.log(trie.find("ba"));  // ["ball", "bat"]
    console.log(trie.find("ball")); // ["ball"]
}

function Node(data){
    this.key = data;
    this.parent = null;

    this.children = {};

    this.end = false
}


Node.prototype.getWord = function(){ // returns a word string
    var node = this; // start at this node
    var output = []; // output to return

    while(node != null){ // we'll be going up the tree, from the last letter to the root
        output.unshift(node.key); // unshift pushes to the front of the array
        node = node.parent // step up
    }

     return output.join('');
}


function Trie(){
    this.root = new Node(null);
}

Trie.prototype.insert = function(word){
    var node = this.root; // start at root

    for(let i = 0; i<word.length; i++){ // loop through the words letters
        if(!node.children[word[i]]){ // if the letter doesn't exist in the children
            node.children[word[i]] = new Node(word[i]); // add the letter to the children
            node.children[word[i]].parent = node; // record the parent  of the child as the current node
        }

        node = node.children[word[i]]; // go to next depth in trie

        if(i == word.length-1){ // if we're on the last letter, mark the node as the end
            node.end = true
        }
    }
}

Trie.prototype.find = function(prefix){
    var node = this.root;
    var output = [];

    for(var i = 0; i < prefix.length-1; i++){ // loop through letters

        if(node.children[prefix[i]]){ // if the letter is in the children
            node = node.children[prefix[i]] // go to that child
        } else {
            return output; // theres none, return empty array
        }
    }

    // recursively find all words in the node
    findAllWords(node, output);
  
    return output;
}


function findAllWords(node, arr){ // this mutates an array

    if(node.end){ // check if at the end
        arr.unshift(node.getWord()); // add the word from the node
    }

    for (var child in node.children){ // for each child letter
        findAllWords(node.children[child], arr); // call this function, which will return the full word, if we're at the end of the word
    }
}

Trie.prototype.contains = function(word){ // returns a bool
    var node = this.root; // start at root

    for(var i = 0; i<word.length; i++){ // loop through each letter
        if(node.children[word[i]]){ // check if letter exists in children
            node = node.children[word[i]]; // if it does, go deeper
        } else {
            return false; // if it isn't in the children then it isn't in there.
        }
    }

    // finished looping through all the letters, but is the word actually a full word?
    return node.end; // if this is then last letter of a word it will return true
}

run();