import React from "react";
import '../css/TaskItem.css';
import { AiOutlineCloseCircle } from "react-icons/ai";


function Tarea({ id, text, complete, taskComplete, taskDelete,}) {
  

   
  return (
    <div  className={complete ? 'TaskItem Complete' : 'TaskItem'}  >
        <div className="TaskText" onClick={()=> taskComplete(id) }>
            {text}
        </div>
        <div className="TaskContainerIcon" onClick={() => taskDelete(id)}>
        <AiOutlineCloseCircle className="TaskIcon" />
        </div>
    </div>
  ); 
}

export default Tarea; 