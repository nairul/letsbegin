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
mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost/letsbegin");

module.exports = mongoose;