var mongoose  = require("mongoose");

var ResourceSchema = new mongoose.Schema(
  {
    name: String,
    url: String,
    imgUrl: String
  }
);

mongoose.model("Resource", ResourceSchema);
mongoose.connect("mongodb://localhost/letsbegin");

module.exports = mongoose;