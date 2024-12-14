const tinderUser = new Object() //First way of declaring Object
const InstaUser = {} //Second Way of declaring object
console.log(InstaUser)
// O/P of both is empty obj: {} 
 
// adding elements in tinderUser
tinderUser.id = "123abc";
tinderUser.name = "Fiza";
tinderUser.isLoggedIn = false;
console.log(tinderUser); //{ id: '123abc', name: 'Fiza', isLoggedIn: false }

//Nested Objects(object ke andar object)
const regularUser = {
    email: "fizaansari@google.com",
    fullname:{
        userfullname:{
            firstname: "Fiza",
            lastname: "Ansari"
        }
    }
}
//Accessing Nested object's value
console.log(regularUser.fullname.userfullname.lastname) //Ansari
const obj1 = {1:'a',2:'b',3:'c'}
const obj2 = {3:'c',4:'d',5:'e'}
const obj3 = {5:'e',6:'f',7:'g'}
const obj4 = Object.assign(obj1,obj2); //concatenate hokr obj1,2 will changs the obj1 also. obj1==obj4
console.log(obj4) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e' }
console.log(obj1) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e' }
console.log(obj1==obj4) //true

//when we want to join more than 2 objects
const obj5 = Object.assign({},obj2,obj3);//Will not be store in obj2
console.log(obj2)// { '3': 'c', '4': 'd', '5': 'e' }
console.log(obj5) //{ '3': 'c', '4': 'd', '5': 'e', '6': 'f', '7': 'g' }
console.log(obj2==obj5) //false

//Using spread operattor
const obj6 = {...obj1,...obj3}

//Array ke andar object
const reguser = [
    {
        id: 34,
        email: 'nkcd@google.com'
    },
    {
        id:45,
        email: 'abc@microsoft.com'
    },
]
//How to acces array ke andar waale object ke value ko
console.log(reguser[0].email); //nkcd@google.com

console.log(tinderUser) //{ id: '123abc', name: 'Fiza', isLoggedIn: false }

//Now if i want to just print the keys of tinder user
console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ](in the form of array)
const ran = Object.keys(tinderUser)
console.log(typeof ran) //object

console.log(Object.values(tinderUser)) //[ '123abc', 'Fiza', false ]

console.log(Object.entries(tinderUser))
//return each entries in object as array: [ [ 'id', '123abc' ], [ 'name', 'Fiza' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true