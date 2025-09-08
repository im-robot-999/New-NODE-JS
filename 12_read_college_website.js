const fs=require('fs');
fs.readFile('index.html','utf8',(err,data)=>{
    if(err)console.log("file not found");
    else console.log("college website contest:/n",data);
});1  

