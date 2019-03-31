// OK
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const NotesSchema = new Schema({
  noteTitle: { type: String, required: true },
  noteBody: { type: String, required: false },
  _user: {
    type: String,
    ref: "User"
  },
  _project: {
    type: String,
    ref: "Project"
  },

});


module.exports = mongoose.model("Notes", NotesSchema);