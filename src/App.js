import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import TasksProvider from "./providers/tasksProvider";
import TaskInput from "./components/TaskInput";
import TasksList from "./components/TasksList";


function App() {


    return (
        <TasksProvider>
            <div className="App">
                <div className="container">
                    <div className="row m-3">
                        <h1>What to do?</h1>
                    </div>
                    <TaskInput/>
                    <div className="row m-2">
                        <TasksList/>
                    </div>
                </div>
            </div>
        </TasksProvider>
    );
}

export default App;
