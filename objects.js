
const mysym =Symbol("zaeem")
const jsuser ={
    name:"zaeem",
    [mysym]:"i am zaeem",
    "full name" :"Zaeem Ul Hassan",
    email:"zaeemulhassan819@gmail.com",
    location:"lahore",
    Age:24,
    }

    // console.log(jsuser.name);
    // console.log(jsuser["full name"]);
    // console.log(jsuser.mysym);
    
    
    // Object.freeze(jsuser)
    //here i was locked the object not anyone can changed it.
    
    
    // console.log(jsuser.email);
    // jsuser.email="myname@gmail.com"
    // console.log(jsuser[mysym]);
    // console.log(jsuser);

jsuser.greeting = function(){
        console.log(`hello sir how are you ${this["full name"]}?`);
        
    }
    
    console.log(jsuser.greeting());
    
    
