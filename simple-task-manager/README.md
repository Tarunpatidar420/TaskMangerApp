## API Endpoints

This project provides a REST API to manage tasks. Each task contains a title, description, status, and creation time.

---

### 1. Get All Tasks

- Method: GET  
- URL: /api/tasks  

This API returns all the tasks stored in the database.

---

### 2. Create Task

- Method: POST  
- URL: /api/tasks  

This API is used to create a new task.

Request body example:

{
  "title": "Complete assignment",
  "description": "Finish task manager project"
}

Note: Title is required. If title is empty, the request will fail.

---

### 3. Update Task

- Method: PUT  
- URL: /api/tasks/:id  

This API updates an existing task using its ID.

You can update title, description, or status.

---

### 4. Toggle Task Status

- Method: PATCH  
- URL: /api/tasks/:id/toggle  

This API is used to change the status of a task.

If the task is pending, it will be marked as completed.  
If it is completed, it will be marked as pending.

---

### 5. Delete Task

- Method: DELETE  
- URL: /api/tasks/:id  

This API deletes a task using its ID.

---

## Validation

- Title must not be empty  
- If title is missing, the API will return an error  

---

## Summary

All required operations (create, read, update, delete, and toggle status) are implemented using REST API.