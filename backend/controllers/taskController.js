import Task from "../models/taskModel.js";

// CREATE A NEW TASK
export const createTask = async (req, res) => {
  try {
    const { title, description, priority, dueDate, completed } = req.body;
    const task = new Task({
      title,
      description,
      priority,
      dueDate,
      completed: completed === "Yes" || completed === "true",
      owner: req.user.id,
    });
    const saved = await task.save();
    res.status(201).json({
      success: true,
      message: "Task created successfully",
      task: saved,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ALL TASKS FOR LOGGED IN USER
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ owner: req.user.id }).sort({
      createdAt: -1,
    });
    res.json({
      success: true,
      tasks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET A SINGLE TASK 
