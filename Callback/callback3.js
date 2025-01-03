const science = (option)=>{
    console.log(option.name + " your admission confirm in science stream with per " + option.per);
    
}

const commerce = (option)=>{
    console.log(option.name + " your admission confirm in commerce stream with per " + option.per);
}

const arts = (option)=>{
    console.log(option.name + " your admission confirm in arts stream with per " + option.per);
}

const addmission = (file,percentage,cb)=>{
    // cb({name:file,per:percentage})
    cb(
        {
            name:file,
            per:percentage,
            date:"12-12-2015"
        }
    )
}

var percentage = 51;

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