var mongoose  = require("mongoose");

var ResourceSchema = new mongoose.Schema(
  {
    name: String,
    creator: String,
    url: String,
    imgUrl: String,
    topic: String
  }
);

mongoose.model("Resource", ResourceSchema);
mongoose.connect("mongodb://localhost/letsbegin");

module.exports = mongoose;