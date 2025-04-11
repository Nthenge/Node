const fs = require('fs');

// reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString())
// })

// console.log('Last line')
// writing files
// fs.writeFile('./docs/blog1.txt', "Hello world", ()=> {
//     console.log("File was written")
// })

fs.writeFile('./streams.js', "Hello world", ()=> {
    console.log("File was written")
})

//directories
// if(!fs.existsSync('./streams')){
//     fs.mkdir('./streams', (err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log("Folder created")
//     })
// }else{
//     fs.rmdir('./streams', (err) => {
//         if(err){
//             console.log(err)
//         }
//         console.log("folder deleted")
//     })
// }



//deleting files

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', err => {
        if(err){
            console.log(err)
        }
        console.log('file delted')
    })
}