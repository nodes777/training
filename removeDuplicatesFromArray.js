//How would you remove duplicates from an array?
let array_with_duplcates = ['DELHI','NEWYORK','DELHI','GOA','MUMBAI','CALIFORNIA','GOA']

function removeDuplicates(arr){
    let unique_array = []
    for(let i = 0;i < arr.length; i++){
        if(unique_array.indexOf(arr[i]) == -1){
            unique_array.push(arr[i])
        }
    }
    return unique_array
}

function removeDuplicatesFilter(arr){
    var newArr = arr.filter(function(elem, index, self){
        // filter for the first occurance of that elem
        // return that vindex alue
        return index == self.indexOf(elem)
    })
    return newArr;
}

function removeDuplicateUsingSet(arr){
    let unique_array = Array.from(new Set(arr))
    return unique_array
}