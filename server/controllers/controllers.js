let Task = require("mongoose").model("Task");

class UserController{
	all(req,res){
		Task.find({},(err,tasks)=>{
			if(err){
				console.log("Returned error",err);

				res.json({message: "Error", error: err})
			}
			else{
				res.json({message:"Success",tasks:tasks});
			}
		})
	}

	create(req,res){
		console.log(req.body);
		let task = new Task(req.body);
		console.log(task);
		

		task.save((err)=>{
			if(err){
				console.log("Returned error",err);
				res.json({message:"Error",error:err});
			}else{
				res.json({message:"Task Successfully Created"});
			}
		})
	}

	update(req,res){
		Task.findByIdAndUpdate(req.params.id,req.body,(err,task)=>{
			if(err){
				return res.json({message:"Error",error:err})
			}
			else{
				return res.json(task);
			}
		});
		
	}

	findById(req,res){
		Task.findOne({_id:req.params.id},(err,task)=>{
			if(err){
				console.log("Returned error",err);
				res.json({message:"Error",error:err})
				
			}else{
				res.json({task});
			}
		});
	}

	destroy(req,res){
		Task.remove({_id:req.params.id},(err)=>{
			res.json({message:"User has been deleted"});
		});
	}
}

module.exports = new UserController();