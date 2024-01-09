const http=require('http')

const data=require('./data')
const handson1=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('Hello World!!')
        res.end()
    }
    else if(req.url==='/html'){
        res.write("<h1>HELLO WORLD</h1>")
        res.end()
    }
    else if(req.url==='/json'){
        const stringData=JSON.stringify(data)
        res.write(stringData);
        res.end()
    }
})
handson1.listen(4000,()=>{
    console.log("server Started")
})
