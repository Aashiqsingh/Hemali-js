function demo()
{
    console.log("demo function called...");
    
}


function test(x){
    // console.log(x);
    x()
    // console.log(x());
        
}

// test(123)
// test("ram")
// test(true)
// test(12.45)

test(demo)