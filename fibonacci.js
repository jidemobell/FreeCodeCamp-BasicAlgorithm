//this is a recursive implementaion which becomes very slow but code easy to understand
function factoRial(n){     // just testing recursion on factorial
    if(n==1) {
        return 1;}
    return n *(factoRial(n-1));
}

//console.log(factoRial(4));

function fibaoNacci(n){
   var  fiboArray = [];
    if(n == 1){
        fiboArray = [1,1];
        return fiboArray;
    }
    else {
      
        return  fibaoNacci(n-1).concat(arrSumofLast2Index(fibaoNacci(n-1)));
     
    } 
    

}

console.log(fibaoNacci(40));

function sumFibs(num) {
    var myArray = fibaoNacci(num);
    var sum=0;
    var i = 0;
    for (var i = 0; i< myArray.length; i++) {
        if(myArray[i] < num && myArray[i]%2 != 0){
            sum += myArray[i];
       }
       
    }

    return sum;
}

//console.log(sumFibs(100));

function arrSum(arr){
    var sum = 0;
    var i = 0;
    while(i < arr.length){
        sum += arr[i];
        i++;
    }
    return sum;
}


function arrSumofLast2Index(arr){
    
    var sum = 0;
    var arr2 = [];
    var j = arr.length;
    arr2.push(arr[j-2],arr[j-1]);

    return arrSum(arr2);
    
}



