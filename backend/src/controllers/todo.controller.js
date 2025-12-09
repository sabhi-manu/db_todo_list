const todoModel = require("../models/todo.model")
const userModel = require("../models/user.model")

async function addTodoController(req,res) {
    let {task,date}= req.body
    console.log(req.user)

    if(!task || !date){
        return res.status(400).json({
            message:"data not provided."
        })
    }

    let item = await todoModel.create({
        task,
        date,
        user:req.user._id
    })
    
    if(!item){
        return res.status(500).json({
            message:"internal server error"
        })
    }

    await userModel.findByIdAndUpdate(req.user._id, { $push: { post: item._id }} )

    res.status(201).json({
        message:"item add successfully.",
        item
    })
}

async function deleteTodoController(req,res) {
    let {id} = req.body
    console.log(id)
    if(!id){
        return res.status(400).json({
            message:"id not provided"
        })
    }
    let item = await todoModel.findByIdAndDelete({_id: id})
    await userModel.findByIdAndUpdate({_id:req.user.id},{$pull:{post:id} })

    console.log(item)
    
    if(!item){
        return res.status(500).json({
            message:"internal server error."
        })
    }

    res.status(200).json({
        message :"task delete successfully."
    })
    
}

async function allTodoController(req,res) {
    let allTOdo = await todoModel.find({user:req.user.id})
    if(!allTOdo){
        return res.status(500).json({
            message:"error in feacting all todo."
        })
    }
    res.status(200).json({
        message:"fetching successfully.",
        allTOdo
    })
    
}

async function updateTodoController(req,res) {
    let {id,task,date} = req.body

    if(!id || !task){
        return res.status(400).json({
            message:"invalid data."
        })
    }
    const item = await todoModel.findByIdAndUpdate( {_id:id} )
    console.log(item)
    item.task= task;
    item.date= date;
     await item.save()


if(!item){
    return res.status(500).json({
        message:"internal server error."
    })
}
res.status(200).json({
    message:"todo item update successfully.",
    update:item
})
    
}


async function isDoneTodoController(req,res) {
  try {
    const { id } = req.body;  
    const todo = await todoModel.findById(id);
    if (!todo) return res.status(404).json({ message: "Todo not found" });

    todo.isDone = !todo.isDone; 
    await todo.save();

    res.status(200).json({
      message: "Todo status updated",
      updatedTodo: todo
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
}



module.exports = {addTodoController,deleteTodoController,allTodoController,updateTodoController,isDoneTodoController}