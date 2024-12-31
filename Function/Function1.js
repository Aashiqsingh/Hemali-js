// there are four types of function 
// 1. without returnType without argument 
// 2. without returnType with argument
// 3. with returnType without argument
// 4. with returnType with argument

// 1. without returnType without argument 

function demo()
{
    console.log("demo function called...");
    
}

// demo()

// 2. without returnType with argument

function add(a,b)
{
    console.log("Addition = ",a+b);
    
}

// add(2,3)


// 3. with returnType without argument

function test()
{
    // return "Hello goood afternoon all..."
    return 10;
}

// var x = test()
// console.log(x);

// console.log(test());


// 4. with returnType with argument

function mul(x,y)
{
    // return x*y;

    return "multiply = " + (x*y)
}

var x = mul(3,4)
// console.log("multiply = ",x);
console.log(x);

