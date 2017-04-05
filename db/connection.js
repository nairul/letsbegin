var mongoose  = require("mongoose");

var ResourceSchema = new mongoose.Schema(
  {
    url: String
  }
);

mongoose.model("Resource", ResourceSchema);
mongoose.connect("mongodb://localhost/letsbegin");

module.exports = mongoose;