var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
      firstName = firstAndLast.split(' ')[0];
      lastName  = firstAndLast.split(' ')[1];
    this.getFullName = function() {
         return this.firstName+' '+this.lastName;

    };

    this.getFirstName = function (){
      return this.firstName;  
    };

    this.getLastName = function (){
        return this.lastName;  
      };

    this.setFirstName = function (str){
        this.firstName = str;  
        };
    
     this.setLastName = function (str){
            this.lastName = str;  
        };
        
    this.setFullName = function (str){
        this.firstName = str.split(' ')[0];
        this.lastName  = str.split(' ')[1]; 
        };

    return firstAndLast;

}

var bob = new Person('Bob Ross');

console.log(Object.keys(bob));