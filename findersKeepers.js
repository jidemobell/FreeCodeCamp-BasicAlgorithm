/*
var longWords = words.filter(function(word){
    //return word.length > 6;
  }); */

  function findElement(arr, func) {
    var testEntry = arr.filter(func);
     return testEntry[0];
     
  }


  console.log(findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }));
