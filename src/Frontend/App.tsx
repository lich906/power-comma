import React from 'react';
import './App.css';
import MainMenu from "./Components/MainMenu/MainMenu";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
    return (
        <div className="app">
            <MainMenu/>
            <div className="main-container">
                <Sidebar items={[
                    {id: 1},
                    {id: 2},
                    {id: 3},
                    {id: 4},
                    {id: 5},
                    {id: 6},
                    {id: 6},
                    {id: 6},
                    {id: 6},
                    {id: 6},
                    {id: 6},
                    {id: 6},
                    {id: 6},
                    {id: 6},
                    {id: 6},
                    {id: 6},
                    {id: 6},
                    {id: 6},
                    {id: 6},
                    {id: 6},
                    {id: 6},
                    {id: 6},
                    {id: 6},
                    {id: 6},
                    {id: 6},
                ]}/>
            </div>
        </div>
    );
}

export default App;
