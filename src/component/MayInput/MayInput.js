import React, {useState} from "react";
import "./MayInput.scss"

export const MayInput = ({inputText, type}) => {
    const [changeField, setChangeField] = useState(inputText);

    return (
        <>
            <input className="mayInput" type={type} value={changeField} onChange={e => setChangeField(e.target.value)}/>
        </>
    )
};