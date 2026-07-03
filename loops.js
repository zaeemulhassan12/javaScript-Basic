
// let index =0

// while(index<=10){

//     console.log(`hy zaeem ${index}`);
//     index =index+2
    
// }



// let array =["zaeem","usman","Ali","ahmad"]
// let b=0

// // while(b <array.length) {
    
// //     console.log(`hy zaeem ${array[b]}`);
// //     b=b+ 1
// // }

// do {
//         console.log(`hy zaeem ${array[b]}`);
//         b=b+1
// } while (b<=array.length);



//High Order Array loops
//In Array

Array =[1,2,3,4,5,6,7,8,9]

for (const a of Array) {
    // console.log(`print numbers ${a}`);
    
}

//In strings 


const Intro ="hello my name is zaerem ul hassan "


for (const E of Intro) {
    // console.log(`Intorduce yourself sir:${E}`);
    
}



//Map


// const map =new Map

// map.set('pak','pakistan')
// map.set('IR','IRAN')
// map.set('PORT','PORTUGAL')
// map.set('PORT','PORTUGAL')

// console.log(map);


//FOR IN (IN OJBECTS)

const zaeem = {

    name:'zaeem',
    rollno: 'B-29462',

}

for (const key in zaeem) {
 
    // console.log(`${key} is a ${zaeem[key]}`);
    //    console.log(key':-'value);
    
}

//in array 


// Array =[1,2,3,4,5,6,7,8,9]


// for (const key in Array) {
//    console.log(key);
   
    
// }


//in Map
// const map = new Map
// map.set('pak','pakistan')
// map.set('IR','IRAN')
// map.set('PORT','PORTUGAL')
// map.set('PORT','PORTUGAL')


// for (const key in map) {
    
//     console.log(key);
    
// }


//foreach in arrow function

 Array =["zaeem","usman","Ali","ahmad"]

// Array.forEach(function(val1){
// console.log(val1);

// });

// Array.forEach(item => {
//     console.log(item);
    
// });

//for each loop in ojects 
const array =[
    {
        language :"python"
    },
        {
        language :"javascript"
    },
        {
        language :"ruby"
    },
    {
        language :"React"
    }
]

array.forEach((items)=>(
    console.log(items)
    
))