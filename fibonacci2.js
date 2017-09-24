function fibaoNacci(n){
    var  fiboArray = [];
     if(n <= 2){
         fiboArray = [1,1];
         return fiboArray;
     }
     else {
           fiboArray = [1,1];
           while(n > 2){
           // console.log(arrSumofLast2Index(fiboArray));
            fiboArray.push(arrSumofLast2Index(fiboArray));
            n--;
           }
         
        } 

        return fiboArray;
     
 
 }
 
 console.log(sumFibs(75025));
 
 function sumFibs(num) {
     var myArray = fibaoNacci(num);
     var sum=0;
     var i = 0;
     for (var i = 0; i< myArray.length; i++) {
         if(myArray[i] <= num && myArray[i]%2 != 0){
             sum += myArray[i];
        }
        
     }
 
     return sum;
 }
 

 
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
 