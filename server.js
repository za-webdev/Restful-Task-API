let express    = require("express");
let path       = require("path");
let app        = express();
let bodyParser = require("body-parser");

app.use(bodyParser.json());

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(8000,()=>{
	console.log("Server Running");
});