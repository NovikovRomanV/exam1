import React, {ChangeEvent, useState} from "react";

type TitleTypeProps = {
    title: Array<MessangeType>
    setTitle: (title:Array<MessangeType> )=>void
}
type MessangeType = {
    messange: string
}

export const FullInput = (props: TitleTypeProps) => {
    let [valueInput, setValueInput] = useState<string>('')

    const inputEvent = (event: ChangeEvent<HTMLInputElement>) => {
        setValueInput(event.currentTarget.value)
    }
    const chengTitle = (value: string) => {
        let newMessange = {messange: value}
        props.setTitle([newMessange, ...props.title])
        setValueInput('')
    }
    return (
        <div>
            <input value={valueInput} onChange={inputEvent}/>
            <button onClick={() => {
                chengTitle(valueInput)
            }}>+
            </button>
        </div>
    )
}