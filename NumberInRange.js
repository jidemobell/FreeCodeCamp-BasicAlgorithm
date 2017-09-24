
function sum(arr){
    var Total = 0;
    for (var i = 0; i < arr.length; i++) {
        Total = Total + arr[i];
    }
    return Total;
}

function sumAll(arr) {
  var Arr = [];
  var min = Math.min.apply(null,arr);
  var max = Math.max.apply(null,arr);
  var index = min + 1; 
  while(index < max){
      Arr.push(index);
      index++;
  }
  console.log(Arr);

  return  Total= min + max + sum(Arr);
}

console.log(sum([1,4]));
console.log(sumAll([1,4]));
