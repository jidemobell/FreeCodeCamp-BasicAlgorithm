function smallestCommons(arr){
    arr = arr.sort();
    var lcf = arr[0]*arr[1];
    var common;
    
    var middleArray = allBetween(arr);
    
    multipleArray = [lcf]
    
    var i = 1;
    while(i < multipleArray.length+1){
        multipleArray.push(multipleArray[0]*(i+1));
        if(allDivisible(middleArray,multipleArray[i]) == 1){
            var common = multipleArray[i];
            break;
        }
        i++;
    }

   return common;

}


function allBetween(arr){
    var counter=[];
    var j = arr[0]+1;
    var k =0;
     while(j < arr[1]){
         counter.push(j++);
         k++;
     }
    return counter;
}

function allDivisible(arr,val){
        var i=0;
        while(i < arr.length){
            if(val%arr[i] != 0){
                return -1
            }
            i++;
        }
        return 1;
}


console.log(smallestCommons([23,18]));