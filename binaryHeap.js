// Left child = i*2
// Right Child = i*2 +1
// Parent = Math.floor(i/2)

function run(){

}

function MinHeap(){
    let heap = [null]; // have first element be null

}

MinHeap.prototype.insert = function(num) {
    heap.push(num); // push the num to the last item in the array

    if(heap.length > 2){ // if theres more than one node in the heap
        let index = heap.length - 1; // last index in heap

        while(heap[index] < heap[Math.floor(index/2)]){ // while last item in array is less than its parent, we have to move it up.
            if(index >= 1){ // if we're not on the root node
                // parent               //node we just inserted
                [heap[Math.floor(index/2)], heap[index]] = [heap[index], heap[Math.floor(index/2)]]// ES6 destructuring an array, switch the parent and the node
                
                if(Math.floor(index/2) > 1) { // if the parent node is not the root
                    index = Math.floor(index/2) // set the index to be the parent, now the index will still refer to the number we just passed in
                } else {
                    break; // We'll keep doing this while loop until the new node is less than the parent node
                }
            }
        }
    }
}


MinHeap.prototype.remove = function(){ // removing in a Binary Heap will always remove the first (smallest) node in the heap, returns the first node in heap
    let smallest = heap[1]; // first node in array is the smallest

    if(heap.length > 2){ // if theres more than one node in the heap
        heap[1] = heap[heap.length - 1] // set the first node to be the last node in the array
        heap.splice(heap.length - 1) // remove the last node, since it is now the first node
        if(heap.length == 3){ // if theres only 2 items in the heap
            if(heap[1] > heap[2]){ // if  is bigger than the other
                [heap[1], heap[2]] = [heap[2], heap[1]]; // swap the first node (now the biggest) with the second node (the largest in the case that theres only 2 nodes)
            }
            return smallest
        }

    // If theres more than 2 nodes in the heap

    let i = 1;
    let left = 2*i;
    let right = 2*i +1;

        while(heap[i] >= heap[left] || heap[i] >= heap[right]) { // while the root node is more than or equal to its children (left or right)
            if(heap[left] < heap[right]) { // if the left child is more than the right
                [heap[i], heap[left]] = [heap[left], heap[i]]; // swap the root node with left node
                i = 2*i; // set the index to the left node, the one we just moved to this position
            } else { // right node is less than left node
                [heap[i], heap[right]] = [heap[right], heap[i]];
                i = 2*i + 1;
            }
            left = 2 * i; // reset the left and right
            right = 2 * i + 1;

            if(heap[left] == undefined || heap[right] == undefined){ // if we're at the end of the tree, we can leave the while loop
                break;
            }
        } 
         
    } else if (heap.length == 2){ // if theres one element in the array
        heap.splice(1,1) // cut the last element
    } else { // if theres no elements at all
        return null 
    }

    return smallest;
}


//avg an worst case O(nLogn)
MinHeap.prototype.sort = function(){
    let result = [];

    while(heap.length){
        result.push(this.remove());
    }
    return result;
}



run();