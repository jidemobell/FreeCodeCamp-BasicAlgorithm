//fix this for browsers  -- an infinite loop watch somewhere

function sumPrimes(num) {
     var entryArray = counter(num);
     var summer = 0;
     for (var i = 1; i < entryArray.length; i++) {
         var e = entryArray[i];
         if(textPrime(e) == 1){
             summer += e;
         }
     }
     return summer;
}

function counter(num){
    var i=0;
    count = [];
    while(i < num ){
        i++;
        count.push(i);
    }
    return count;
}

function textPrime(y){
    var eachArray = counter(y);
    var i =1;
    while(i < eachArray.length-1){
        var entry = eachArray[i];
        if(y%entry== 0){
         return -1;
        // break;
        }
        i++;
    }
    return 1;
}



console.log(sumPrimes(977));