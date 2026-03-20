const Task = require("../models/Task");

// GET all
exports.getTasks = async (req, res) => {
  const tasks = await Task.find().sort({ created_at: -1 });
  res.json(tasks);
};

// CREATE
exports.createTask = async (req, res) => {
  const { title, description } = req.body;

  if (!title || !title.trim()) {
    return res.status(400).json({ message: "Title required" });
  }

  const task = await Task.create({
    title: title.trim(),
    description
  });

  res.status(201).json(task);
};

// UPDATE
exports.updateTask = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id);

  if (!task) return res.status(404).json({ message: "Not found" });

  task.title = req.body.title || task.title;
  task.description = req.body.description || task.description;
  task.status = req.body.status || task.status;

  await task.save();

  res.json(task);
};

// TOGGLE
exports.toggleTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) return res.status(404).json({ message: "Not found" });

  task.status = task.status === "pending" ? "completed" : "pending";

  await task.save();

  res.json(task);
};

// DELETE
exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};