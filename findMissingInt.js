// How to find the missing numbers from an array of integers. Q: You’re given an array of N integers. N may be very large. You know that every integer 1-N appears once in the array, except there is one or more integer(s) missing.
// This only works if theres only a single missing number...

function findMissingInt(arr){
	var lastNum = arr[arr.length-1];
	var sum = 0;
	var expectedSum = (lastNum * (lastNum+1) / 2)

	for(var i = 0; i <=arr.length; i++){
		sum += arr[i];
	}

	var missingAmount = expectedSum - sum;

	return missingAmount;
}

