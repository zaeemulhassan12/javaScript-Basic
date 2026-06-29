// function login(username='ZAEEM'){
//     if(!username){
//         console.log("please enter the name");
//         return
//     }
//     return `${username} is login`
// }



// function add(P1 , P2){
//     return P1+P2
// }


// const RESULT = add(4,3);

// console.log(RESULT)
// console.log(login())


// function calcultae(val1,val2,...num1){

//     return num1
// }

// console.log(calcultae(200 ,100 , 600, 800));

// to pass object
const user = {
    name:"zaeem",
    SECTION:"E",
}

function handleobject(anyobject){
    console.log(`My name is ${anyobject.name} and my section is ${anyobject.SECTION}`);
    

}


handleobject(user)
handleobject({
    name:"hassan",
    SECTION:"F"
})


// to pass Array


const zaeem =[ 22 , 44, 55, 66, 77 ,88]

function Array(getarray){

    return getarray[4]
}

console.log(Array(zaeem));
console.log(Array([500 , 55, 465, 648 , 5648]));

