
function translatePigLatin(str){
    var vowels = ['a','e','i','o','u'];
    var text2 = str.split("");
    var firstLetter = text2[0];
    var restWord = str.substr(1);


    if(inArray(firstLetter,vowels)){
        return str + "way";
   }else{
        var cluster = cCluster(str,vowels);
        return  str.substr(cluster.length) + cluster + "ay";
   }
}

function inArray(x,arr){
    return arr.indexOf(x) > -1;
}



function cCluster(consonant,vowels){
       var strArr = consonant.split("");
       var cluster = [];
       var i = 0;
       while(i < strArr.length){
              if(i==0){
                  cluster.push(strArr[0]);
              }
              else{
                  if(inArray(strArr[i],vowels)){
                      break;
                  }else{
                      cluster.push(strArr[i]);
                  }
              }
              i++;

       }
       return cluster.join("");
}

console.log(translatePigLatin("ove"));
