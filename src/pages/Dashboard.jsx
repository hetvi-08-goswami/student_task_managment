import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import TaskList from "../components/TaskList";

const Dashboard = () => {
  const navigate = useNavigate() 
    
    const[data,setTasks]=useState([])

    useEffect(()=>{
      fetchData();
    },[]);
    

    const fetchData =  async()=>{
      try{
        const responce=await fetch
        const data=responce.json();
        setTasks(data);
      }
        catch(error){
          console.log(error);
        
      }
    }
  

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
    <TaskList/>
   </div>
  )
}

export default Dashboard
