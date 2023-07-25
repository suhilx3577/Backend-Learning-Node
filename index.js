const express = require('express')
const app = express();
const bodyparser = require('body-parser')

const port = 5000


// This is simply a middleware that extracts our body 
app.use(bodyparser.json())



function calculatecounter(counter){
    var sum=0;
    for(var i = 0 ; i<=counter ; i++ ){
        sum=sum+i;
    }
    return sum;
}
function handlecounter(req,res){
    // access using query
    var v1 = req.query.v1
    
    //access using Headers
    // var v1 = req.headers.v1;
    
    // access using the Body
    // var v1 = req.body.counter
    const sum = calculatecounter(v1);
    
    //Sending the data as JSON Response
    var ansobj = {
        ans:sum
    }
    res.status(401).send(ansobj);
}
app.get('/givecounter',handlecounter)


function handlepage(req,res){
    res.sendFile(__dirname+'/index.html')
}

app.get('/getpage',handlepage);





app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(port,()=>{
    console.log('listeting at port :',port)
})










/* MIDDLEWARE FUNCTIONS

function middleware1(req,res,next){
    var v1 = req.headers.v1
    console.log('Printing from the middleware '+v1)
    next();
}
app.use(middleware1);
*/


/*    REQUEST METHODS 

app.post('/',(req,res)=>{
    res.send('This is a post Request')
})
app.put('/',(req,res)=>{
    res.send('This is a Put Request')
})
app.delete('/',(req,res)=>{
    res.send('This is a Delete Request')
})

*/