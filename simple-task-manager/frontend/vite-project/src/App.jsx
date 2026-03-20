import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";
import {
  getTasks,
  createTask,
  updateTask,
  toggleTaskStatus,
  deleteTask,
} from "./services/taskService";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchAllTasks = async () => {
    try {
      setLoading(true);
      const data = await getTasks();
      setTasks(Array.isArray(data) ? data : []);
    } catch (error) {
      console.log("Error fetching tasks:", error);
      setTasks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllTasks();
  }, []);

  const handleAddOrUpdateTask = async (taskData) => {
    try {
      if (editingTask) {
        await updateTask(editingTask._id, {
          ...taskData,
          status: editingTask.status,
        });
        setEditingTask(null);
      } else {
        await createTask(taskData);
      }

      await fetchAllTasks();
    } catch (error) {
      console.log("Error saving task:", error);
      alert(error?.response?.data?.message || "Something went wrong");
    }
  };

  const handleToggle = async (id) => {
    try {
      await toggleTaskStatus(id);
      await fetchAllTasks();
    } catch (error) {
      console.log("Error toggling task:", error);
      alert("Failed to toggle task");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      await fetchAllTasks();
    } catch (error) {
      console.log("Error deleting task:", error);
      alert("Failed to delete task");
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  return (
    <div className="container">
      <h1>Simple Task Manager</h1>

      <TaskForm
        onSubmit={handleAddOrUpdateTask}
        editingTask={editingTask}
        setEditingTask={setEditingTask}
      />

      <div className="task-list">
        {loading ? (
          <p>Loading tasks...</p>
        ) : tasks.length === 0 ? (
          <p>No tasks found</p>
        ) : (
          tasks.map((task) => (
            <TaskItem
              key={task._id}
              task={task}
              onToggle={handleToggle}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;