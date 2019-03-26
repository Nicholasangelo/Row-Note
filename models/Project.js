// OK
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ProjectSchema = new Schema({
  projectName: { type: String, required: true },
  projectBody: { type: String, required: true },
  projectNotes:{ type:String, required: false },
  _user: {
    type: String,
    ref: "User"
  },
});


module.exports = mongoose.model("Project", ProjectSchema);