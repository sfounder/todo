import cn from "classnames";
import CheckIcon from "./icons/checkIcon";
import EditIcon from "./icons/editIcon";
import DeleteIcon from "./icons/deleteIcon";
import {useContext, useState} from "react";
import {TasksContext} from "../providers/tasksProvider";


export default function TasksList() {
    const {tasks, dispatch} = useContext(TasksContext);
    const [isValid, setIsValid] = useState(null);

    const handleTaskClick = id => {
        const task = tasks.find(task => task.id === id);
        dispatch({
            type: 'changed', task: {
                id, isDone: !task.isDone
            }
        })
    };

    const handleDeleteClick = id => {
        dispatch({
            type: 'deleted',
            task: {id}
        })
    };


    const handleEditClick = id => {
        setIsValid(true);
        const task = tasks.find(task => task.id === id);

        dispatch({
            type: 'changed',
            task: {
                id,
                isEditMode: true,
                draft: task.text
            }
        })
    }

    const handleEditChange = (e, id) => {
        const value = e.target.value;
        setIsValid(value.length > 3);
        dispatch({
            type: 'draft',
            task: {
                id,
                draft: value
            }
        })
    }

    const handleCheckButtonClick = id => {
        if (isValid) {
            const task = tasks.find(task => task.id === id);

            dispatch({
                type: 'changed', task: {
                    id, text: task.draft, isEditMode: false
                }
            })
        }
    };

    const handleKeyDown = (event, id) => {
        if (event.key === 'Enter') {
            handleCheckButtonClick(id);
        }
    };

    return (
        <div className="vstack gap-1">
            {tasks.map(({text, id, isDone, isEditMode, draft}) => (
                <div key={id} className="stack-item">
                    {isEditMode ? (
                        <input
                            minLength="3"
                            onChange={(e) => handleEditChange(e, id)}
                            type="text"
                            className={cn("form-control", {
                                "is-valid-custom": isValid,
                                "is-invalid": !isValid
                            })}
                            value={draft}
                            onKeyDown={(event) => handleKeyDown(event, id)}
                        />
                    ) : (
                        <div className="text-wrapper" onClick={() => handleTaskClick(id)}>
                            <span className={cn("item-text", {deleted: isDone})}>{text}</span>
                        </div>)}
                    <div className="item-icons">
                        {isEditMode
                            ? <CheckIcon className="check-icon" onClick={() => handleCheckButtonClick(id)}/>
                            : <EditIcon className="edit-icon" onClick={() => handleEditClick(id)}/>
                        }
                        <DeleteIcon onClick={() => handleDeleteClick(id)}/>
                    </div>
                </div>))}
        </div>
    )
}