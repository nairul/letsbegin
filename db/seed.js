var mongoose  = require("./connection");
var seedData  = require("./seeds");

var Resource = mongoose.model("Resource");

Resource.remove({}).then(function(){
  Resource.collection.insert(seedData).then(function(){
    process.exit();
  });
});