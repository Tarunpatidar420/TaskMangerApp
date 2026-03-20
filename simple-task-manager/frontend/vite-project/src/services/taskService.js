import axios from "axios";

//  Render backend URL
const API_URL = "https://task-manger-app-backend-4g1g.onrender.com/api/tasks";

// Get all tasks
export const getTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Create task
export const createTask = async (taskData) => {
  const response = await axios.post(API_URL, taskData);
  return response.data;
};

// Update task
export const updateTask = async (id, taskData) => {
  const response = await axios.put(`${API_URL}/${id}`, taskData);
  return response.data;
};

// Toggle task status
export const toggleTaskStatus = async (id) => {
  const response = await axios.patch(`${API_URL}/${id}/toggle`);
  return response.data;
};

// Delete task
export const deleteTask = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};