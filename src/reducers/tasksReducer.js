import {useReducer} from "react";

function tasksReducer(tasks, action) {
    switch (action.type) {
        case 'added': {
            return [...tasks, {
                ...action.task
            }]
        }
        case 'changed': {
            return tasks.map(task => {
                if (task.id === action.task.id) {
                    return {
                        ...task,
                        ...action.task
                    }
                }
                return task;
            })
        }
        case 'deleted': {
            return tasks.filter(task => task.id !== action.task.id);
        }
        case 'draft': {
            return tasks.map(task => {
                if (task.id === action.task.id) {
                    return {
                        ...task,
                        draft: action.task.draft
                    }
                }
                return task;
            })
        }
    }
}


export default function useTasksReducer() {
    return useReducer(tasksReducer, []);
}