const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// Create Task
router.post("/", async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.json(task);
});

// Get Tasks by Dog
router.get("/:dogId", async (req, res) => {
  const tasks = await Task.find({ dogId: req.params.dogId });
  res.json(tasks);
});

// Toggle Completed
router.put("/:id/toggle", async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.completed = !task.completed;
  await task.save();
  res.json(task);
});

module.exports = router;
