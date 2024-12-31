function singapore(amount,fname)
{
    console.log(fname + " your tour confirm in singapore with package " + amount);
    
}

function lasvegas(amount,fname)
{
    console.log(fname + " your tour confirm in lasvegas with package " + amount);
    
}

function france(amount,fname){
    console.log(fname + " your tour confirm in france with package " + amount);
}

function goa(amount,fname){
    console.log(fname + " your tour confirm in goa with package " + amount);
}


var budget = 1000;
var firstName = "rahul"

if(budget > 3500)
{
    singapore(budget,"hemali")
}
else if(budget > 2500)
{
    lasvegas(budget,"kamal")
}
else if(budget > 1500)
{
    france(budget,firstName)
}
else if(budget > 500)
{
    goa(budget,firstName)
}