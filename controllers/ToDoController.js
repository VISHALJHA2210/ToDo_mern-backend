const ToDoModel= require('../models/ToDoModel');

module.exports.getTodo = async (req,res)=>{
    const toDo = await ToDoModel.find();
    res.send(toDo);
}

module.exports.saveTodo = async (req,res)=>{

    const {text}=req.body;

    ToDoModel.create({text}).then((data)=>{
        console.log("Added successfully...");
        console.log(data);
        res.send(data);
    });
}

module.exports.updateTodo = async (req,res)=>{
    const {_id, text}= req.body;
    ToDoModel.findByIdAndUpdate(_id,{text})
    .then(()=>res.send("Updated Successfully"))
    .catch((err)=> console.log(err))
}


module.exports.deleteTodo = async (req,res)=>{
    const {_id}= req.body;
    ToDoModel.findByIdAndDelete(_id)
    .then(()=>res.send("Deleted Successfully"))
    .catch((err)=> console.log(err))
}
