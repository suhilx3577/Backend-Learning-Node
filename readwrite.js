const fs = require('fs')

var todoList = {
    'todo' : [
      {
        'id':1,
        'todo': 'complete the Node assignments',
        'description': 'You have to complete it by 3 clock'
      },
      {
        'id':2,
        'todo': 'complete the Node assignments',
        'description': 'You have to complete it by 3 clock'
      },
      {
        'id':3,
        'todo': 'complete the Node assignments',
        'description': 'You have to complete it by 3 clock'
      },
      {
        'id':4,
        'todo': 'complete the Node assignments',
        'description': 'You have to complete it by 3 clock'
      },
    ]
  }


fs.writeFile('todo.json',JSON.stringify(todoList),'utf8',(err)=>{
    if(err) console.log(err)
})

fs.readFile('todo.json','utf8',(err,data)=>{
    console.log(JSON.parse(data))
})



