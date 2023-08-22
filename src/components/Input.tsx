import React, {ChangeEvent, useState} from "react";

type ValueInputTypeProps = {
    setValueInput: (valueInput: string)=>void
    valueInput: string
}

export const Input = (props: ValueInputTypeProps) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setValueInput(event.currentTarget.value)

    }
    return (
        <input value={props.valueInput} onChange={onChangeHandler}/>
    )
}