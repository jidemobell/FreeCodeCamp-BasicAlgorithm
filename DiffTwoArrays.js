// function arr.concat   and arr.filter used

function inArray(x,arr){
    return arr.indexOf(x) > -1;
}


function diffArray(arr1,arr2){
    var newArr1 = arr1.filter(function(entry){
    return (!inArray(entry,arr2));
});

var newArr2 = arr2.filter(function(entry){
    return (!inArray(entry,arr1));
});

var finalArr = newArr1.concat(newArr2);

return finalArr;

}

