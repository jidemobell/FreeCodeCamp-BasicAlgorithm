function addTogether() {
    // console.log(args);
      var args = Array.from(arguments);
      var value1 = typeof args[0];
      var value2 = typeof args[1];
  
      if(args.length > 1){
          
          if(value1 != "number" || value2 != "number"){
              return undefined;
          }
          else{
              return args[0] + args[1];
          }
         
      }else if(args.length == 1){
           if(value1 != "number"){
              return undefined;
          }else{
            return function(y){
              if(typeof y != "number"){
                return undefined;
              }else{
                return args[0]+y;
              }
              
          };
            
          }
          
      }
    }
  
console.log(addTogether(2,"3"));



