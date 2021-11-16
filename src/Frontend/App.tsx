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
                    {
                        id: 1,
                        selected: false
                    },
                    {
                        id: 2,
                        selected: false
                    },
                    {
                        id: 3,
                        selected: false
                    },
                    {
                        id: 4,
                        selected: false
                    },
                    {
                        id: 5,
                        selected: false
                    }
                ]}/>
            </div>
        </div>
    );
}

export default App;
