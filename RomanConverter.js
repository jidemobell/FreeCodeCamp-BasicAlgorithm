var numerals = {
    1: 'I',
    5: 'V',
    50 : 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
};

var values = [1,5,50,100,500,1000];

//function to find if values is in array
function inArray(x,arr){
    return arr.indexOf(x) > -1;
}

//function to change number to array
function numToArray(number){
    return number.toString().split("").map(Number);
}


//function to convert number to roman numerals using switch
function convertToRoman(number){
    var result="";
    var numArray = numToArray(number);
    if(numArray.length > 1){
        //put in switch
        
        switch(numArray.length){
            case 2:
                  result = case2(number); 
                  
                break;
            case 3:
                result = case3(number);  
                break;
            default:
                 if(inArray(number,values)){
                     result = numerals[number];
                    }
                 else{
                 var firstSlice = numArray.splice(-3,3);
                 var thousand = Number(numArray.join(""));
                 var thousandth =  Array(thousand + 1).join('M');
                 console.log(thousandth);
                 var finalEntry = case3(Number(firstSlice.join("")));
                 result = thousandth + finalEntry;
                 

                 }
                 
                 
        }
     
    }else {
        //change the units
        numArray = numToArray(number);
        result =  forUnits(numArray);
    }
   return result;
}

//function toRoman case2 function

function case2(number){
    var numArray = numToArray(number);
    if(inArray(number,values)){
                     return numerals[number];
                    }
                    else if(number/10 == numArray[0]){
                    return forTenths(numArray);
                    }
                    else{
                        var spliceArray = numArray.splice(-1,1,0);
                        var result = forTenths(numArray) + forUnits(spliceArray);
                        return result;
                    }
}

//function toRoman case3 function

function case3 (number){
    var numArray = numToArray(number);
     if(inArray(number,values)){
                     return numerals[number];
                    }
                    else if(number/100 == numArray[0]){
                    return forHundreths(numArray);
                    }
                    else{
                        var spliceArray1 = numArray.splice(-2,2,0,0);
                        var spliceArray2 = spliceArray1.splice(-1,1,0);
                        var result = forHundreths(numArray) +forTenths(spliceArray1)+forUnits(spliceArray2);
                        return result;
                    }
}

//function to convert units to numerals

function forUnits(numArray){
        
         var toRoman;
  
         if(inArray(numArray[0],values)){
            return numerals[numArray[0]];
        }
        else{
            if(numArray[0] < 5  ){
             toRoman = 5 - numArray[0];
            if(toRoman > 1){
                return (Array(numArray[0]+1).join('I'));
            }
            else{
                return 'IV';
            }
        }else{
               toRoman = 10 - numArray[0];
            if(toRoman > 1){
                return 'V'+ (Array((numArray[0]-5)+1).join('I'));
            }
            else{
                return 'IX';
            }

        }
        
        }
}

//function to convert tenths to numerals

function forTenths(numArray){
            var toRoman;
            if(numArray[0] < 5  ){
             toRoman = 5 - numArray[0];
            if(toRoman > 1){
                return (Array(numArray[0]+1).join('X'));
            }
            else{
                return 'XL';
            }
        }else{
              toRoman = 10 - numArray[0];
            if(toRoman > 1){
                return 'L'+ (Array((numArray[0]-5)+1).join('X'));
            }
            else{
                return 'XC';
            }

        }
        
        
}

//function to convert hundredths to numerals

function forHundreths(numArray){
            var toRoman;
            if(numArray[0] < 5  ){
             toRoman = 5 - numArray[0];
            if(toRoman > 1){
                return (Array(numArray[0]+1).join('C'));
            }
            else{
                return 'CD';
            }
        }else{
             toRoman = 10 - numArray[0];
            if(toRoman > 1){
                return 'D'+ (Array((numArray[0]-5)+1).join('C'));
            }
            else{
                return 'CM';
            }

        }       
}

convertToRoman(36);
