// 1- calculate and print the sum
// Output: 150
// const numbers = [10, 20, 30, 40, 50];
   
//      let sum=0;

// numbers.forEach((elee,index)=>{

//  sum =sum +elee
 

// })
// console.log(sum)
//----------------------------------------------------------------

// 2- Create a new array where every number is doubled.


// Output: [2, 4, 6, 8, 10]

// const numbers = [1, 2, 3, 4, 5];

// const newNumbers= numbers.map((ele,index)=>{
//     return ele*2
    
// })
// console.log(newNumbers)

//----------------------------------------------------------------
// 3- Create a new array containing only the names.

// Output: ["Ahmed", "Mona", "Ali"]


// const users = [
//   { id: 1, name: "Ahmed", age: 22 },
//   { id: 2, name: "Mona", age: 25 },
//   { id: 3, name: "Ali", age: 20 }
// ];

// const newUsers =users.map((ele ,i)=>{

//     return ele.name
// })
// console.log(newUsers)

//----------------------------------------------------------------

// 4- Create a new array containing only even numbers.
// Output: [2, 4, 6, 8]

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const even =numbers.filter((num)=>{
//     return num % 2==0

// })
// console.log(even)

//----------------------------------------------------------------


// 5- Return users whose age is 18 or greater.
// Output: [
    //   { name: "Mona", age: 22 },
    //   { name: "Sara", age: 30 }
    // ]
    
    
    // const users = [
    //   { name: "Ahmed", age: 17 },
    //   { name: "Mona", age: 22 },
    //   { name: "Ali", age: 15 },
    //   { name: "Sara", age: 30 }
    // ];

    // const newUsers =users.filter((age)=>{
    //     return age.age>=18

    // })
    // console.log(newUsers)
    //----------------------------------------------------------------
    // 6- Find the product with the name "Phone".
    // Output: { id: 2, name: "Phone", price: 15000 }
    // const products = [
    //   { id: 1, name: "Laptop", price: 30000 },
    //   { id: 2, name: "Phone", price: 15000 },
    //   { id: 3, name: "Tablet", price: 10000 }
    // ];

    // const newProduct =products.find((elee)=>{
    //     return elee.name = "phone"

    // })

    // console.log(newProduct)


//----------------------------------------------------------------
// 7- Check that all products has stock.
// Output: true

// const products = [
//   { name: "Laptop", stock: 0 },
//   { name: "Phone", stock: 0 },
//   { name: "Tablet", stock: 5 }
// ];

// const product =products.every((elee)=>{
// return elee.stock > 0
// })
// console.log(product)
//----------------------------------------------------------------


// 8- Calculate the cart total price.
// Output: 55000

// const cart = [
//   { name: "Laptop", price: 30000 },
//   { name: "Phone", price: 15000 },
//   { name: "Tablet", price: 10000 }
// ];
// let total=0;
// cart.forEach((price)=>{
//      total = total+ price.price
``
// })

// console.log(total)
