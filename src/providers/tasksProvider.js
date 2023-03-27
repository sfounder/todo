import React, {createContext} from "react";
import useTasksReducer from "../reducers/tasksReducer";

export const TasksContext = createContext({tasks: []});

export default function TasksProvider({children}) {
    const [tasks, dispatch] = useTasksReducer();

    return <TasksContext.Provider value={{
        tasks,
        dispatch
    }}>
        {children}
    </TasksContext.Provider>
}