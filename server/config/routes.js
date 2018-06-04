let UserController = require("../controllers/controllers.js");

module.exports =(app)=>{
	app.get("/api/tasks",UserController.all);
	app.get("/api/tasks/:id",UserController.findById);
	app.delete("/api/tasks/:id",UserController.destroy);	
	app.put("/api/tasks/:id",UserController.update);	
	app.post("/api/tasks",UserController.create);
}
