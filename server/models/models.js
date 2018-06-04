let mongoose = require('mongoose');

mongoose.model('Task',new mongoose.Schema({
	title:{type:String},
	description:{type:String},
	completed:{type:Boolean,default:false},
	updatedAt:{type:Date,default:Date.now},
	createdAt:{type:Date,default:Date.now}

	
},{ timestamps: true }));