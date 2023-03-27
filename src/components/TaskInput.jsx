import {useContext, useState} from "react";
import {v4 as uid} from "uuid";
import {TasksContext} from "../providers/tasksProvider";
import cn from "classnames";

export default function TaskInput() {
    const { dispatch } = useContext(TasksContext);
    const [inputData, setInputData] = useState();
    const [isValid, setIsValid] = useState(false);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setIsValid(value.length > 3);
        setInputData(value);
    };

    const handleAddButtonClick = () => {
        dispatch({
            type: 'added',
            task: {
                id: uid(),
                text: inputData,
                isDone: false,
                isEditMode: false
            }
        })
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleAddButtonClick();
        }
    };

    return (
        <div className="row">
            <div className="input-group mb-3">
                <input
                    onChange={handleInputChange}
                    type="text"
                    className={cn("form-control", {
                        "is-valid-custom": isValid,
                        "is-invalid": !isValid
                    })}
                    minLength="3"
                    placeholder="Enter your todo item"
                    onKeyDown={handleKeyDown}
                />
                <button disabled={!isValid} onClick={handleAddButtonClick} className="btn btn-outline-secondary" type="button"
                        id="button-addon2">Button
                </button>
            </div>
        </div>
    )
}