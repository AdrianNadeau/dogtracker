const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: String,
  completed: { type: Boolean, default: false },
  dogId: { type: mongoose.Schema.Types.ObjectId, ref: "Dog" }
});

module.exports = mongoose.model("Task", taskSchema);
