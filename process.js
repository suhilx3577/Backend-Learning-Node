
// function logResponse(data){
//     console.log(data)
// }

// function callBackFun(jsonResponse){
//     jsonResponse.json().then(logResponse)
// }

// fetch('http://localhost:5000/givecounter?v1=3',{method:"GET"}).then(callBackFun)


// Using Async Await 
const func = async() =>{
    const json = await fetch('http://localhost:5000/givecounter?v1=10',{method:"GET"})
    const data = await json.json();

    console.log(data);
}

func();

