import React,{ useState } from 'react';
import './App.scss';
import {directory} from "./API/directory";
import {MayInput} from "./component/MayInput/MayInput";


function App() {



    return (
        <div className="appContainer">
            <label>add contact</label>
            <input type="text"/>
            {directory.map(item =>
                <div key={item.id} className="container">
                    <MayInput inputText={item.emoji} typ={"text"} />
                    <MayInput inputText={item.name}  type={"text"}/>
                    <MayInput inputText={item.telephone} type={"number"}/>
                    <button>удалиь</button>
                </div>
            )}
        </div>
    );
}

export default App;
