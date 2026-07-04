// array =[1,2,3,4,5,6,7,8,9]

// const mynum = array.reduce(function(acc,curral){
//     return acc+curral;
// },0)

// console.log(mynum);

// const mynum = array.reduce((acc,curral)=>(acc+curral))


// console.log(mynum);


// const shoppingcart =[
//     {
//         item:"Data science",
//         price: 444
//     },
//     {
//         item:"Ai",
//         price: 566
//     },    {
//         item:"java Script",
//         price: 888
//     },    {
//         item:"Python",
//         price: 34
//     },
// ]


// const total = shoppingcart.reduce((acc,item)=>(item.price),0)

// console.log(total);
array =[1,2,3,4,5,6,7,8,9]


const mynum = array.map((num)=>(num*10)).map((num)=>(num+1))


console.log(mynum);
