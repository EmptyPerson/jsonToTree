import React from 'react';
import './App.css';
import Tree from "./components/Tree/Tree";
import {useSelector} from "react-redux";
import NavFields from "./components/NavFields/NavFields";
import ButtonSourceData from "./components/ButtonSourceData/ButtonSourceData";
import SaveButton from "./components/SaveButton/SaveButton";
import Field from "./components/Field/Field";


function App() {
    const obj = useSelector(state => state)

    return (

        <div className="App">
            <div className="container">
            <div className="tree">
                <div className="nav">
                    <div className="textTree">
                        <h2>Structure of tree</h2>
                        <div className="content-button">
                            <ButtonSourceData/>
                            <SaveButton/>
                        </div>
                    </div>
                    <div className="navMenu">
                        <NavFields {...obj}/>
                    </div>
                </div>
                <div className="side-wrapper">
                    <div className="sidebar">
                <Tree  {...obj} />
                    </div>
                </div>
                <div className="fields">
                <Field {...obj}/>
                </div>
            </div>
            </div>
        </div>

    );
}

export default App;
