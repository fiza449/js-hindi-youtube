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

console.log(typeof typeof 100);