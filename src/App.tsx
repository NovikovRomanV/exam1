import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";

function App() {
    const [title, setTitle] = useState([
        {messange: 'messange1'},
        {messange: 'messange2'},
        {messange: 'messange2'},
    ])

    const [valueInput, setValueInput] = useState<string>('')

    // const chengTitle = (value: string, setValueInput: (value:string)=> void) => {
    //     let newMessange = {messange: value}
    //     setTitle([newMessange, ...title])
    //     setValueInput('')
    // }

    const addMessage = (valueInput: string) => {
        let newMessange = {messange: valueInput}
        setTitle([newMessange, ...title])
        setValueInput('')
    }

    const onclickButtonHandler = () => {
        addMessage(valueInput)
    }

    return (
        <div className="App">
            <FullInput title={title} setTitle={setTitle}/>
            <Input setValueInput={setValueInput} valueInput={valueInput}/>
            <Button callBack={onclickButtonHandler}  name={'+'}/>
            {/*<input/>*/}
            {/*<button>+</button>*/}
            <ul>
                {title.map((el, index) => {
                    return <li key={index}>{el.messange}</li>
                })}
            </ul>
        </div>
    );
}

export default App;
