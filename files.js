const fs = require('fs');
// const[, , num] = process.argv

// fs.readFile("./awesome.txt", "utf-8" , (err, data) => {
//     console.log(data)
// }
// )


// fs.appendFile("./fun.html",bulkQuote , "utf-8" , (err) => {
    //     console.log("completed!!!")
    // }
    // )
    
    
    // const fs = require('fs');
    
    const bulkQuote = "\nLive more,Worry less"
// delete a file

const[, , num] = process.argv

for(let i=1;i<=num;i++){
    fs.writeFile(`./backup/text-${i}.html`,bulkQuote , "utf-8" , (err) => {
        console.log("completed!!!",i)
    }
    )
}
// fs.readdir("./backup",(err, data) => {

// data.forEach(fileName => 
//     fs.unlink(`./backup/${fileName}`, (err) => {
//     console.log("deleted");
// })
// )})

