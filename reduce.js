array =[1,2,3,4,5,6,7,8,9]

// const mynum = array.reduce(function(acc,curral){
//     return acc+curral;
// },0)

// console.log(mynum);

const mynum = array.reduce((acc,curral)=>(acc+curral))


console.log(mynum);