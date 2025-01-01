// JSON --> JavaScript object notation 

// json .
// key : value 

// var student = {
//     roll: 101,
//     name:"ravi",
//     email:"ravi@gmail.com",
//     isAlive:true,
//     age:24
// }


// console.log(student);
// // console.log(typeof student);

// console.log(student.name);
// console.log(student.email);



var product = {
    id:101,
    name:"I phone",
    price:65000,
    color:["red","black","white"],
    isStock:true,
    model:{
        ram:"16GB",
        sturage:"1 tb",
        camera:"24mp",
        display:"6 inch",
        battery:"4500 mAh",
        processor:"A13 bionic"
    }
}

console.log(product);
console.log(product.name);
console.log(product.price);
console.log(product.color);
console.log(product.color[0]);
console.log(product.color[1]);
console.log(product.color[2]);


console.log(product.model);
console.log(product.model.sturage);
console.log(product.model.camera);
console.log(product.model.display);
console.log(product.model.battery);





