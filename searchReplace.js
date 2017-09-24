
function myReplace(str, before, after) {
    var stringArray = str.split(" ");
    var indexVar = stringArray.indexOf(before);
    var newAfter;
     
     if(checkForUpper(before)== true){
       newAfter = convertToUppered(after);
     }else{
        newAfter = convertToLowered(after);
     }

    stringArray.splice(indexVar,1,newAfter);
  
   return stringArray.join(" ");
}

function checkForUpper(text){
    var text2 = text.split("");
    if(text2[0].toUpperCase() == text2[0]){
    return true;
    }else{
    return false;
}
}

function convertToUppered(text){
    var text2 = text.split("");
    var final = [];
    for (var i = 0; i < text2.length; i++) {
        if(i==0){
            final.push(text2[0].toUpperCase());
        }else{
            final.push(text2[i]);
        }
    }
return final.join("");
}

function convertToLowered(text){
    var text2 = text.split("");
    var final = [];
    for (var i = 0; i < text2.length; i++) {
        if(i==0){
            final.push(text2[0].toLowerCase());
        }else{
            final.push(text2[i]);
        }
    }
return final.join("");
}

//console.log(convertToUppered("leaped"));

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));