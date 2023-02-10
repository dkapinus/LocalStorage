import React, {useState} from 'react';
import './App.css';
import {LocalStorage} from "./LocalStorage";

function App() {


    const [value,setValue]=useState(0)

const onClickHandler = ()=>{
        setValue(value+1)
}

    const onClickHandlerSet = ()=>{
        localStorage.setItem('curentValue',JSON.stringify(value))
        localStorage.setItem('curentValue55',JSON.stringify(value+5))
    }

    const onClickHandlerGEt = ()=>{
      let GetItem = localStorage.getItem('curentValue')
        if(GetItem){const newValue =JSON.parse(GetItem)
        setValue(newValue)}

    }

    const onClickHandlerClear = ()=>{
      localStorage.clear()
        setValue(0)

    }

    const onClickHandlerRemove = ()=>{
        localStorage.removeItem('curentValue55')


    }

    return (
        <div className="App">
           <LocalStorage value={value}/>
            <button onClick={onClickHandler}>inc</button>
            <button onClick={onClickHandlerSet}>setLocalstorage</button>
            <button onClick={onClickHandlerGEt}>getLocalStorage</button>
            <button onClick={onClickHandlerClear}>Clear</button>
            <button onClick={onClickHandlerRemove}>remove</button>




        </div>
    );
}

export default App;
