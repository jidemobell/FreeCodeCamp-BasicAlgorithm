  //console.log(steamrollArray([1, [2], [3, [[4]]],8,[4,[16]]]));

  function steamrollArray(arr){
      
      var nest = [];
      while(containsArray(arr)==1){
        var shredder =[];
        for (var i = 0; i < arr.length; i++) {
            var e = arr[i];
            if(Array.isArray(e)){
                shredder = shredder.concat(e);
               // console.log(shredder);
            }
            else{
                nest.push(e);
            }
        }
        arr = shredder;
    }
    nest = nest.concat(arr);
return nest;
}

 // console.log(steamrollArray([[["a"]], [["b"]]]));


  function containsArray(arr){
      for (var i = 0; i < arr.length; i++) {
          var e = arr[i];
          if(Array.isArray(e)){
              return 1;
          }
      }
      return -1;
  }

  //console.log(isAnArray(1));