import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import { HomePage, TodoPage } from './pages';


export const App = () => {
    return (
        <Routes>
            <Route  path = '/todo' element = { <Outlet /> }>
                <Route index element = { <TodoPage /> } />
            </Route>
            <Route  path = '*' element = { <HomePage /> } />
        </Routes>
    );
};

