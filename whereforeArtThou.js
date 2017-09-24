

function whatIsInAName(collection, source) {
  var arr = [];
  var souceArray = returnObjectValueAsArray(source);
  var collectionValuesArray = returnArrayOfValuesOfObjectArray(collection);
  var toEntryArray = ifArrayValuesInAnyArrayOfArrays(collectionValuesArray,souceArray);
  
  var result = convertArrayOfValuesToTheirObjects(toEntryArray,collection);


  
  return result;
}


//this return boolean if an element is in an array
function inArray(x,arr){
    return arr.indexOf(x) > -1;
}

//this return an array of an object values
function returnObjectValueAsArray(source){
    var  arraY = [];
     for (var key in source) {
    if (source.hasOwnProperty(key)) {
        var element = source[key];
        arraY.push("" + key + element);
    }
  
  }
  return arraY;
}

//this return an array of values of all objects in an array of arrays

function returnArrayOfValuesOfObjectArray(arr){
   var fullArray = [];
  for (var index = 0; index < arr.length; index++) {
  
  var element = arr[index];
   fullArray.push(returnObjectValueAsArray(element));
  }

  return fullArray;

}

//this copares two arrays, checking if all entries in one can be found in the other

function allArrayValuesInArray(arr1,arr2){
  var index= 0;
  while(index < arr2.length){
        if(!inArray(arr2[index],arr1)){
           return false;
        }
        index++;
       }
       return true;
}

//this checks if all values in an array can be found in each array of an Array of arrays (comparing an array with an array of arrays)

function ifArrayValuesInAnyArrayOfArrays(arrOfArrays,arr){
     var finalArray = [];
     for (var index = 0; index < arrOfArrays.length; index++) {
       var eachArray = arrOfArrays[index];
       if(allArrayValuesInArray(eachArray,arr) == true){
             finalArray.push([eachArray,index]);
       }
     }
     return finalArray;
}

function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }

    return true;
}


function convertArrayOfValuesToTheirObjects(arrOfValues,objectArr){
        var final = [];
        for (var i = 0; i < arrOfValues.length; i++) {
          var element = arrOfValues[i][1];
           final.push(objectArr[element]);
        }

        return final;
}


