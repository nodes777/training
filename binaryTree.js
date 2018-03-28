function run(){
	var tree = new Tree();

	tree.addValue(3)
	tree.addValue(4)
	tree.addValue(7)
    tree.addValue(1)
	console.log(tree);
	tree.traverse();
	tree.search(1)
}

function Node(val){
	this.value = val;
	this.left = null;
	this.right = null;
}

function Tree(){
	this.root = null;
}

Tree.prototype.addValue = function(val){
	var n = new Node(val);

	if(this.root == null){
		this.root = n;
	} else {
		this.root.addNode(n)
	}
}

Node.prototype.addNode = function(n){
	if(n.value < this.value){
		if(this.left == null){
			this.left = n;
		} else {
			this.left.addNode(n);
		}
	} else if (n.value > this.value){
		if(this.right == null){
			this.right = n;
		} else {
			this.right.addNode(n);
		}
	} 
	// If they're equal, nothing happens
}


Tree.prototype.traverse = function(){
    this.root.visit();
}

Node.prototype.visit = function(){
    if(this.left != null){
        this.left.visit();  
    }
    console.log(this.value)

    if(this.right != null){
        this.right.visit(); 
    }

}

Tree.prototype.search = function(val){
    this.root.search(val);
}

Node.prototype.search = function(val){
    if(this.value == val){
        console.log(`Found: ${JSON.stringify(this)} ${val}`)
        return this
    } else if (val < this.value && this.left != null) {
        this.left.search(val);
    } else if (val > this.value && this.right != null) {
        this.right.search(val)
    } else {
        console.log(`Not found: ${val}`)
    }
}

run();