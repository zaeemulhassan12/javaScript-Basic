// const promiseOne = new Promise(function(resolve , reject){

//     //do an async task 
//     //DB calls, cryptography , network 

//     setTimeout( function(){
//         console.log('Async task is complete ');
//         resolve()
//     }, 2000)

// })

// promiseOne.then(function(){

//     console.log('Promise is consumed');
    
// });


// new Promise(function(resolve,reject){
//     console.log("Async part 2 complete");
//     resolve()
    
// }).then(function(){
//     console.log("async reslve Two");
    
// })


// const PromiseThree = new Promise(function(reslve,reject){

//     setTimeout(() => {
//         reslve({Username:'Zaeem', Password :'Paistan123'})
//     }, 1000);

// })


// PromiseThree.then(function(user){
//     console.log(user);
    
// })


const PromiseFour = new Promise(function(reslve ,reject){
    let error =false;
    if(!error){
        reslve({Username:'Zaeem', Password :'Paistan123'})
    }else(
        reject('Error is Occur please see this')
    )
})

PromiseFour
.then(function(user){
    console.log(user);
    return user.Username;
    
})
.then(function(Username){
console.log(Username);

})
.catch(function(error){
    console.log(error);
    
}).finally(function(){
    console.log('all code is done is resolve or Rejected');
    
})