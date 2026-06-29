
// const mysym =Symbol("zaeem")
// const jsuser ={
//     name:"zaeem",
//     [mysym]:"i am zaeem",
//     "full name" :"Zaeem Ul Hassan",
//     email:"zaeemulhassan819@gmail.com",
//     location:"lahore",
//     Age:24,
//     }

    // console.log(jsuser.name);
    // console.log(jsuser["full name"]);
    // console.log(jsuser.mysym);
    
    
    // Object.freeze(jsuser)
    //here i was locked the object not anyone can changed it.
    
    
    // console.log(jsuser.email);
    // jsuser.email="myname@gmail.com"
    // console.log(jsuser[mysym]);
    // console.log(jsuser);

// jsuser.greeting = function(){
//         console.log(`hello sir how are you ${this["full name"]}?`);
        
//     }
    
//     console.log(jsuser.greeting());
    

//object part 2 and 3 

//const tinder =new Object{}

const tinderUser ={}

tinderUser.id ="29468"
tinderUser.name ="Zaeem"
tinderUser.isloggedin = false


// console.log(tinderUser);

// const regularuser ={

//     email : "zaeemulhassan",
//     fullname:{
//         username:{
//             firstname:"ME",
//             lastname: "YOU"
//         }
//     }
// }

// //console.log(regularuser.fullname.username.firstname);

const obj1 ={1:'a', 2:'b'}
const obj2 ={3:'c', 4:'d'}
const obj3 ={5:'E', 6:'F'}


// const obj4 = Object.assign({},obj1,obj2,obj3)
// console.log(obj4);

// const obj6 = {...obj1,...obj2,...obj3}

// console.log(obj6);

// const user=[
//     {
//         id:1,
//         name:"zaeemulhassn"
//     },
//     {
//         id:1,
//         name:"zaeemulhassn"
//     },
//     {
//         id:1,
//         name:"zaeemulhassn"
//     },
//     {
//         id:1,
//         name:"zaeemulhassn"
//     },
    
// ]


// user[1].name

// console.log(tinderUser)
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty(isloggedin));


const course = {
    name:"zaeem",
    Class:"10th",
    Roll_Number :"34556"
}


const {name:myfullname}=course

console.log(myfullname);


// this is API format in JASON FORUM TWO TYPES OF FORMATE XML AND JASON .
// AND JASON HAS TOW DIFFERRNT TYPES OBJECTS AND ARRAY FROUM THIS IS API FOMATE 
// 

// {
// "NAME":"ZAEEM-UL-HASSAN"
// "UNIVERSITY ":"USA"
// "SECTION":"E"
// "ROLL NUMBER ":"B-29462"

// }