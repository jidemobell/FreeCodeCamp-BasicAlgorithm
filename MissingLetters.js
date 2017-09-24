

function inArray(x,arr){
    return arr.indexOf(x) > -1;
}

function fearNotLetter(str) {
  var testSplit  = str.split("");
  var codeArray  = generateCodeArray(str)

  if(codeArray.length == testSplit.length){
     return undefined;
}
else{
   
   for (var i = 0; i < codeArray.length; i++) {
    var element = codeArray[i];
    var testElement = String.fromCharCode(element);
    if(!inArray(testElement,testSplit)){
        testSplit.splice(i,0,testElement);
    }
  }
  
}
  return testSplit.join('');
}




function generateCodeArray(str){
    var firstCode = str.charCodeAt(0);
    var finalCode = str.charCodeAt(str.length - 1); 
    var expectegStrLength = finalCode - firstCode;
    var codeArray = [];

    var i = 0;
    while(i <= expectegStrLength){
    codeArray.push(firstCode + i);
    i++;
    }

    return codeArray;
}




console.log(fearNotLetter("bcd"));






