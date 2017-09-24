[1, 3, 2], [5, 2, 1, 4], [2, 1]

function inArray(x,arr){
    return arr.indexOf(x) > -1;
}


function uniteUnique(arr) {
  var myArr = Array.from(arguments);
  var finalArr = myArr.reduce(function(a,b){
      var i=0;
      while(i < b.length){
         
          if(inArray(b[i],a)){
              b.splice(i,1);
               i--;
          } 
          i++
      } 
      return a.concat(b);
  })
  return finalArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
