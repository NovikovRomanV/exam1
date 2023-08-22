import React from "react";

type InputTypeProps = {
    name: string
    callBack: () => void
}

export const Button = (props: InputTypeProps) => {
    const onClickButtonHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    )
}