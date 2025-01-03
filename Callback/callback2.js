function singapore(name)
{
    console.log(name + " your singapore trip confirmed...");
    
}

function lasvegas(name)
{
    console.log(name + " your las vegas trip confirmed...");
    
}

function newyork(name)
{
    console.log(name + " your new york trip confirmed...");
    
}

// cb()  --> callback
function travel(fname,cb)
{
    cb(fname);
}

var budget = 4001;
var firstName = "hetvi"


if(budget > 4000)
{
    travel("rahul",singapore)
}
else if(budget > 3000){
    travel(firstName,lasvegas)
}
else if(budget > 2000){
    travel(firstName,newyork)
}