let fs = require('fs');

fs.readFile("05hello.txt", (error,data)=>{
    if (error){
        throw error
    }
    console.log("File read success");
    console.log(data);
    console.log(data.toString());
})