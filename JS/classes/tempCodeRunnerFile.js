// JS is a multi paradiale lang... 

// This keyword 


// let obj = {
//     name : "pankaj",
//     lastname : "joshi",
//     greet : function(){
//         console.log(this);
//     }

// }

// let obj = {
//     name : "pankaj",
//     lastname : "joshi",
//     greet : ()=>{                             //  arrow function ref to globle obj
//         console.log(this);
//     }

// }

// obj.greet();


// constructors:
// prototype =>constructors function 

// function Person(firstname, lastname){
//     this.firstname = firstname;
//     this.lastname = lastname;
//            
// }

// Person.prototype.greet = function(){

// }


// Array.prototype.sum = function(){
//     console.log("ok ok :");
    
// }
// let arr = [1,2];
// arr.sum();


// let arr2 = [ 3,4,5,6,7];
// arr2.sum();




// CLASSES 

// class Person{
//     constructor(firstname,lastname){
//         this.firstname = firstname;
//         this.lastname =lastname;
//     }
    
// }




// class Animal{
//     constructor(name){
//         this.name = name;
//     }  
//     speek(){
//         console.log("ANIMAL")
//     }
// }

// class Dog extends Animal{
//   constructor(name , age){
//     super(name);
//   }

//   speek(){
//     super.speek();
//   }


// }
// const d = new Dog("kalu","8");
// console.log(d);




class Account{
#blance;
    constructor(name,initalBL){
        this.name = name;
        this.#blance = initalBL;
    }
  get  balance(){
        console.log(`account blance is : ${this.#blance}`);
    }
    set balance(amount){
       
        this.#blance += amount;
    }
}

const a1 = new Account("pankaj",1000);

a1.balance = 1000;
a1.balance;




 