import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Navigate, useNavigate } from "react-router-dom";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

const Dashboard = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const[editTask,setEditTask]=useState()

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/tasks");
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loginData");
    localStorage.removeItem("authData");
    //localStorage.clear()
    navigate("/login");
  };
  const handleAddTask = async (newTask) => {
    const tasktoAdd = { ...newTask, completed: false };
    try {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: { "Content-Type": "application.json" },
        body: JSON.stringify(tasktoAdd),
      });
      console.log(tasktoAdd);
      const data = await response.json();
      setTasks([...tasks, data]);
    } catch (error) {
      console.log(error);
    }
  };

const handleUpdateTask = async (updatedTask) => {
  try{
    await fetch(`http://localhost:3000/tasks/${updatedTask.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTask),
    })

    setTasks(tasks.map((task) => (task.id === updatedTask.id ? {...updatedTask} : task)));
  } catch (error) {
    console.log(error);
  }
  }


const editingTask=(editingTask)=>{
// console.log(editingTask)
setEditTask(editingTask)
}

const handleDeleteTask = async (id) => {
  try {
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  } catch (error) {
    console.log(error);
  }
  };

  return (
    <div>
      <Navbar title="Task Manager" onLogout={handleLogout} />
      <TaskForm addTask={handleAddTask}updateTask={handleUpdateTask}   editingTask={editTask} />
      <h1>MY TASK</h1>
      <TaskList tasks={tasks} editingTask={editingTask} deletingTask={handleDeleteTask} />
    </div>
  );
};

export default Dashboard;