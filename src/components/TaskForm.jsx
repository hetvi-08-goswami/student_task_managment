import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TaskForm = ({ addTask ,editingTask ,updateTask } ) => {
  //declaration
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setTaskData(editingTask);
  }, [editingTask])

  const handleInputChange = (e) => {
    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!taskData.title.trim()) {
      newErrors.title = "title is required";
    } else if (taskData.title.length < 6) {
      newErrors.title = "minimum 6 character is required";
    }
    if (!taskData.description.trim()) {
      newErrors.description = "description is required";
    }

    if (!taskData.dueDate.trim()) {
      newErrors.dueDate = "date is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (FormData) {
        updateTask(FormData);
      } else {
        addTask(formData);
      }
      addTask(taskData);
      //localStorage.setItem("taskData", JSON.stringify(taskData));
      //alert("task are added");
    }
  };

  //design
  return (
    <>
      <div className="add-task-card">
        <h2 style={{ marginBottom: "15px" }}>Add New Task</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Task Title"
              name="title"
              value={taskData?.title}
              onChange={handleInputChange}
            />
            {errors.title && <span className="error-msg">{errors.title}</span>}
          </div>
          <div>
            <textarea
              placeholder="Description"
              rows="3"
              name="description"
              value={taskData?.description}
              onChange={handleInputChange}
            />
            {errors.description && (
              <span className="error-msg">{errors.description}</span>
            )}
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ flex: 1 }}>
              <input
                type="dueDate"
                name="dueDate"
                value={taskData?.dueDate}
                onChange={handleInputChange}
              />
              {errors.date && <span className="error-msg">{errors.date}</span>}
            </div>
            <div style={{ flex: 1 }}>
              <select
                name="priority"
                value={taskData?.priority}
                onChange={handleInputChange}
              >
                <option value="Low">Low Priority</option>
                <option value="Medium">Medium Priority</option>
                <option value="High">High Priority</option>
              </select>
              {errors.priority && (
                <span className="error-msg">{errors.priority}</span>
              )}
            </div>
          </div>
          <div
            className="form-action"
            style={{ display: "flex", gap: "10px", marginTop: "10px" }}
          >
            <button type="submit" className="btn-primary" style={{ flex: 1 }}>
              Add Task
            </button>
            <button
              type="buttton"
              onClick={() =>
                setTaskData({
                  title: "",
                  description: "",
                  dueDate: "",
                  priority: "",
                })
              }
              className="btn-primary"
              style={{ flex: 1 }}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TaskForm;
