import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import TaskList from "../components/TaskList";

const Dashboard = () => {
  const navigate = useNavigate() 
    
    const[task,setTasks]=useState([])

    

    const fetchData =  async()=> {
      try{
        const response = await fetch ("http://localhost:3000/tasks");
        const data= await response.json();
        setTasks(data);
      }
        catch(error){
          console.log(error);
        
      }
    }
  
    useEffect(()=>{
      fetchData();
    },[]);

  const handleLogout = () => {
    localStorage.removeItem('loginData')
    localStorage.removeItem('authData')
    // localStorage.clear()
    navigate('/login')
  }
  return(
   <div>
    <Navbar title="Task Manager" onLogout={handleLogout}/>
    <h1>My Task</h1>
    <TaskList tasks={task}/>
   </div>
  )
}

export default Dashboard
