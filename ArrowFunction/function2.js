const science = (per)=>{
    return "your addmission confirm in science stream with per " + per
}

const commerce = (per)=>{
    return "your addmission confirm in commerce stream with per " + per
}

const arts = (per)=>{
    return "your addmission confirm in arts stream with per " + per
}


var percentage = 51;
var flag;

if(percentage > 90)
{
    flag = science(percentage)
}
else if (percentage > 70)
{
    flag = commerce(percentage)
}
else if(percentage > 50)
{
    flag = arts(percentage)
}

console.log(flag);
