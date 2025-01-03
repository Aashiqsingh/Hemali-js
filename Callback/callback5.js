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
    return cb(
        {
            name:file,
            per:percentage,
            date:"12-12-2015"
        }
    )

    
    
}

var percentage = 81;
var temp;

if(percentage > 90)
{
    temp = addmission("hiya",percentage,science)
}
else if(percentage > 70)
{
    temp = addmission("nency",percentage,commerce)
}
else if(percentage > 50){
    temp = addmission("hetvi",percentage,arts)
}
console.log(temp);
