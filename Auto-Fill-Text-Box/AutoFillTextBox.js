import React, { useState } from 'react';
import './autoFillTextBox.css';
const AutoFillTextBox=()=>{
    const data=['Orange','Apple','Grapes','Guava','Mango','Papaya'];
    const [list,setList] = useState([]);
    const [inputValue,setInputValue]=useState();
    let suggestion=[];
    const getInputData=(e)=>{
        if(e.target.value.length===0) setList([]);
        
        setInputValue(e.target.value);
        data.forEach((item=>{
            if(e.target.value==='') return;
            if(item.toLowerCase().substr(0,e.target.value.length)===e.target.value.toLowerCase()){
                suggestion.push(item);
                setList(suggestion);
            }
        }))
        
        
    }
    const autoComplete=(e,fruit)=>{
        setInputValue(fruit);
    }
    return(
        <div className="container">
            <div className="textbox">
                <input onChange={(e)=>getInputData(e)} type="text" value={inputValue}/>
                    <div className="autoComplete">
                        {list.map((fruit,index)=>(
                            <li key={index} onClick={(e)=> autoComplete(e,fruit)}>{fruit}</li>
                        ))}
                    </div>
            </div>
        </div>
    )
}
export default AutoFillTextBox;