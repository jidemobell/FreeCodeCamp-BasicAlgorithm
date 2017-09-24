function dropElements(arr, func) {
    // Drop them elements.
    var i = 0;
    while(i < arr.length){
        if(!func(arr[i])){
            arr.shift();
        }else{
            break;
        }

    }
    return arr;
    
  }
  
  console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));

var test =[1];
test.shift();
 //console.log(test);
  