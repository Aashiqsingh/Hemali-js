const science = (option)=>{
    return option.name + " your admission confirm in science stream with per " + option.per
    
}

const commerce = (option)=>{
    return option.name + " your admission confirm in commerce stream with per " + option.per
}

const arts = (option)=>{
    return option.name + " your admission confirm in arts stream with per " + option.per
}

const addmission = (file,percentage,cb)=>{
    // cb({name:file,per:percentage})
    var x = cb(
        {
            name:file,
            per:percentage,
            date:"12-12-2015"
        }
    )

    console.log(x);
    
}

var percentage = 91;

if(percentage > 90)
{
    addmission("hiya",percentage,science)
}
else if(percentage > 70)
{
    addmission("nency",percentage,commerce)
}
else if(percentage > 50){
    addmission("hetvi",percentage,arts)
}