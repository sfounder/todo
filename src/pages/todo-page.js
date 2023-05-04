import React from 'react';
import { TaskInput, TasksList } from '../components';

export function TodoPage() {
    return (
        <div className = 'App'>
            <div className = 'container'>
                <div className = 'row m-3'>
                    <h1>What to do?</h1>
                </div>
                <TaskInput />
                <div className = 'row m-2'>
                    <TasksList />
                </div>
            </div>
        </div>
    );
}
