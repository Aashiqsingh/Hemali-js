function singapore(amount,fname)
{
    return fname + " your tour confirm in singapore with package " + amount
    
}

function lasvegas(amount,fname)
{
    return fname + " your tour confirm in lasvegas with package " + amount
    
}

function france(amount,fname){
    return fname + " your tour confirm in france with package " + amount
}

function goa(amount,fname){
    return fname + " your tour confirm in goa with package " + amount
}


var budget = 1000;
var firstName = "rahul";
var flag;

if(budget > 3500)
{
    flag = singapore(budget,"hemali")
}
else if(budget > 2500)
{
    flag = lasvegas(budget,"kamal")
}
else if(budget > 1500)
{
    flag = france(budget,firstName)
}
else if(budget > 500)
{
    flag = goa(budget,firstName)
}

console.log(flag);