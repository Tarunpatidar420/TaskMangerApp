function TaskItem({ task, onToggle, onDelete, onEdit }) {
  return (
    <div className={`task-card ${task.status === "completed" ? "completed" : ""}`}>
      
      <h3>
        {task.title}{" "}
<span className={task.status === "completed" ? "status-completed" : "status-pending"}>
  {task.status === "completed" ? "Completed" : "Pending"}
</span>
        </h3>

      <p>{task.description || "No description"}</p>

      <p>
        <strong>Status:</strong> {task.status}
      </p>

      <p>
        <strong>Created:</strong>{" "}
        {task.created_at
          ? new Date(task.created_at).toLocaleString()
          : "N/A"}
      </p>

      <div className="task-buttons">
        
        {/*  Toggle Button (Pink) */}
        <button
          className="toggle-btn"
          onClick={() => onToggle(task._id)}
        >
          {task.status === "completed" ? "Mark Pending" : "Mark Complete"}
        </button>

        {/* Edit */}
        <button
          className="edit-btn"
          onClick={() => onEdit(task)}
        >
          Edit
        </button>

        {/* Delete */}
        <button
          className="delete-btn"
          onClick={() => onDelete(task._id)}
        >
          Delete
        </button>

      </div>
    </div>
  );
}

export default TaskItem;