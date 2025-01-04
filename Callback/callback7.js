const wordHandler = (option)=>{
    return option.name + " word file"
}
const pdfHandler = (option)=>{
    return option.name + " pdf file"
}

const pngHandler = (option)=>{
    return option.name + " png file"
}

const Handler = (file,cb)=>{
    // var x = cb({name:file,size:"1000kb"})
    // console.log(x);

    return cb({name:file,size:"1000kb"})
    
}

var fileName = "abc.word";
var temp;

if(fileName.endsWith(".word")){
    temp = Handler(fileName,wordHandler)
}
else if(fileName.endsWith(".pdf")){
    temp = Handler(fileName, pdfHandler)
}
else if(fileName.endsWith(".png")){
    temp = Handler(fileName, pngHandler)
}

console.log(temp);
