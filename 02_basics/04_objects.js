// const tinderuser = new Object()  singletone object
// const tinderuser = {} Non Singletone object

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


// console.log(tinderuser);

const regularUser = {
    email:"some@gamil.com",
    fullname:{
        userfullname:{
            firstname: "Bholu",
            lastname : "yadav"
        }
    }
}
// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2 : "b", }
const obj2 = {3: "c", 4 : "d", }

// const obj3 = {obj1, obj2}
// merging of both the objects in obj3
// .assign(target, source) target jis mai app source ke elemnts dalta ho
// const obj3 = Object.assign({}, obj1, obj2)

// spread method
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id : 1,
        email: "h@gmail.com"
    },
    {
        id : 2,
        email: "l@gmail.com"
    }
]

// console.log(users[1].email)
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// destructuring of objects means objects ka elements ko access krna uska naam se ya kisi aur naam se

const course  = {
    coursename: "jis in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

const {courseInstructor : instructor} = course

console.log(instructor);

// Structure of JSON FILE
// {
//     name : "hitesh",
//     coursename : "js in hindi",
//     price : "free"
// }

