let fs = require('fs')

let message = `
    Good morning
    おはよう
    早上好
    Selamat Pagi
`

fs.writeFile("06outputfile.txt",message,(error)=>{
    if(error){
        throw error
    }
    console.log("File write success");
})