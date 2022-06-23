import React, {useState} from 'react';
import './App.scss';
import {directory} from "./API/directory";
import {MayInput} from "./component/MayInput/MayInput";


function App() {

    const [directoryState, setDirectoryState] = useState(directory)
    const [emodjiText, setEmodji] = useState("")
    const [name1, setName] = useState("")
    const [telephone1, setTelephone] = useState("")

    const hendelSubmit = (e) => {
        e.preventDefault();
        setDirectoryState([...directoryState, {
            id: Math.random(),
            emodji: emodjiText,
            name: name1,
            telephone: telephone1
        }])
        setTelephone("")
        setName("")
        setEmodji("")
    }


    return (
        <div className="appContainer">
            <form onSubmit={hendelSubmit}>
                <label htmlFor="emodji">emodji</label>
                <input id="emodji" type="text" value={emodjiText} onChange={e => setEmodji(e.target.value)}/>

                <label htmlFor="name">name</label>
                <input id="name" type="text" value={name1} onChange={e => setName(e.target.value)}/>

                <label htmlFor="telephone">telephone</label>
                <input id="telephone" type="number" value={telephone1} onChange={e => setTelephone(e.target.value)}/>

                <button>add contact</button>
            </form>
            {directoryState.map(item =>
                <div key={item.id} className="container">
                    <MayInput inputText={item.emoji} typ={"text"}/>
                    <MayInput inputText={item.name} type={"text"}/>
                    <MayInput inputText={item.telephone} type={"number"}/>
                    <button>delete</button>
                </div>
            )}
        </div>
    );
}

export default App;
