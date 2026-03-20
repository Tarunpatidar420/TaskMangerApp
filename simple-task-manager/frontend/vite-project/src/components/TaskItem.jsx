function TaskItem({ task, onToggle, onDelete, onEdit }) {
  return (
    <div className={`task-card ${task.status === "completed" ? "completed" : ""}`}>
      <h3>
        {task.title} {task.status === "completed" ? "✅" : "⏳"}
      </h3>

      <p>{task.description ? task.description : "No description"}</p>

      <p>
        <strong>Status:</strong> {task.status}
      </p>

      <p>
        <strong>Created:</strong>{" "}
        {task.created_at ? new Date(task.created_at).toLocaleString() : "N/A"}
      </p>

      <div className="task-buttons">
        <button onClick={() => onToggle(task._id)}>
          {task.status === "completed" ? "Mark Pending" : "Mark Complete"}
        </button>

        <button className="edit-btn" onClick={() => onEdit(task)}>
          Edit
        </button>

        <button className="delete-btn" onClick={() => onDelete(task._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;