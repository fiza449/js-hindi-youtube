//De-structure of object
const course = {
    coursename : 'Javascript ko salam',
    price: 999,
    Instructor: 'Hitesh Sir'
}

//Ordinary syntax to access: course.Instructor
console.log(course.Instructor) //Hitesh Sir

//But the common and de-structure way of accessing is:
const {Instructor} = course
console.log(Instructor) //Hitesh Sir

// +++++++++++ API +++++++++++++++++++
//API: backend se jo value aati h usko kaise likhte h
//JSON: JSON mai ({ }) value aati h backend se
//JSON:
/*
{
 "name": "fiza",
 "coursename": "js in hindi",
 "price": "free"
}
*/