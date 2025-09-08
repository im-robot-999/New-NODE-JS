const fs=require('fs');
fs.readFile('index.html','utf8',(err,data)=>{
    if(err)console.log("page not found");
    else console.log("html content:/n",data);
});1  
