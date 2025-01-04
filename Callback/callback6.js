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
    var x = cb({name:file,size:"1000kb"})
    console.log(x);
    
}

var fileName = "abc.pdf";

if(fileName.endsWith(".word")){
    Handler(fileName,wordHandler)
}
else if(fileName.endsWith(".pdf")){
    Handler(fileName, pdfHandler)
}
else if(fileName.endsWith(".png")){
    Handler(fileName, pngHandler)
}