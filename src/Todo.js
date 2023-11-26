import React from 'react';
import {useState} from "react"
 export function Todo()
 {
  const [allTasks, setTasks]=useState(["playing","coding"])
  
  const [currentTask, setCurrentTask] = useState("")

  function collectData(info)//onchange data will store here
  {
    setCurrentTask(info.target.value)
  }

  function sendData()
  {
//send data from currenttasks to alltasks
    
   setTasks([...allTasks, currentTask])
  }

  return(
    <div>
      Enter Task: <input type="text" onChanage={collectData}/>
      <button onClick={sendData}> Add Task </button>



      {
        allTasks.map(function(i)
        {
          return<li>{i}</li>
        })
      
      }

  
    </div>
  );
 }

 //use state ()--> to store ther data
 //react dom module is for state function
 //imp