//How do get nth Fibonacci number
function getFiboNum(n){
    var fiboArr = [0,1];

    for(var i = 2; i <= n; i++){
        fiboArr[i] = fiboArr[i-2] + fiboArr[i-1];
    }
    return fiboArr[n];
}

//Recursive
function fibonacci(n){
  if(n<=1) {
    return n;
  } else {
  	return fibonacci(n-1) + fibonacci (n-2);
  }
}

getFiboNum(9);
getFiboNum(3);
getFiboNum(5);