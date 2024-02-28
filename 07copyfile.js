fs = require('fs');
let parameter = process.argv
if (parameter.length < 4){
    console.log("Please enter the origin file and destination file")
    process.exit();
}
let source = parameter[2];
let target = parameter[3];
fs.readFile(source, (error,data)=>{
    if (error){
        throw error
    }
    console.log("File read success");
    fs.writeFile(target,data,(error)=>{
        if(error){
            throw error
        }
        console.log("File write success");
    })
})
