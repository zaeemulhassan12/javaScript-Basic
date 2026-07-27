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


// const PromiseFour = new Promise(function(reslve ,reject){
//  setTimeout(function(){
//        let error =false;
//     if(!error){
//         reslve({Username:'Zaeem', Password :'Paistan123'})
//     }else(
//         reject('Error is Occur please see this')
//     )
//  },1000)
// })

// PromiseFour
// .then(function(user){
//     console.log(user);
//     return user.Username;
    
// })
// .then(function(Username){
// console.log(Username);

// })
// .catch(function(error){
//     console.log(error);
    
// }).finally(function(){
//     console.log('all code is done is resolve or Rejected');
    
// })

// const PromiseFive = new Promise(function(reslve ,reject){
//     setTimeout(function(){
//        let error =false;
//     if(!error){
//         reslve({Username:'zafar', Password :'Paistan123'})
//     }else(
//         reject('Error is JS IS WENT WRONGss')
//     )
//  },3000)

// })

// async function consumedPromies() {
//  try{
//     const response = await PromiseFive;
//     console.log(response);
//  } catch(error){
//     console.log(error);   
//  }   
// }


// consumedPromies()


// async function getallusers(params) {
//   try {
//    const response = await fetch('https://randomuser.me/api/')
//   const data = await response.json()
//   console.log(data);
   
//   } catch (error) {
//    console.log('Error is Ouccr',error);
   
//   }
  
// }

// getallusers()




fetch('https://randomuser.me/api/').then(function(response){
   return response.json()
}).then(function(data){
   console.log(data);
   
}).catch(function(error){
console.log('Something went wrong ', error);

});