import React, {useEffect, useState} from 'react';
import './App.css';
import {LocalStorage} from "./LocalStorage";

function App() {


    const [value,setValue]=useState(0)

    useEffect(()=>{
            let GetItem=localStorage.getItem('curentValue')
            if(GetItem){const newValue =JSON.parse(GetItem)
                setValue(newValue)}
        },[]
    )

    useEffect(()=>{
        localStorage.setItem('curentValue',JSON.stringify(value))
        },[value]

    )



const onClickHandler = ()=>{
        setValue(value+1)
}






    return (
        <div className="App">
           <LocalStorage value={value}/>
            <button onClick={onClickHandler}>inc</button>






        </div>
    );
}

export default App;
