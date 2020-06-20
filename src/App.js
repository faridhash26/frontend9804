import React from 'react';
import './App.css';
// access the css with classname
import{
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import Navbar from './components/navbar';



function App(){
    return(
        <Router>
            <div className="App">
                <Navbar />
            </div>
        </Router>
    )
}



export default App;
