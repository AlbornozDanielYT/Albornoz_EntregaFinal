
import './App.css';
import TaskList from './components/TaskList.js';


function App() {
  return (
    <div className="task-manager-grupo-4">
      <div className='logo'>
        Grupo 4 TaskList
      </div>
    <div className='tasklist'>
      <h1>Mis Tareas</h1>
      <TaskList></TaskList>
      
    

    </div>
    </div>
  );
}

export default App;
