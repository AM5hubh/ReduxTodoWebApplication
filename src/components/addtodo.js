import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function addtodo() {

    const {input, setInput} = useState('')
    const dispatch = useDispatch()

    const addtodohandler = (e) => {
        e.prevetDefault()

        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <div>Addtodo</div>
    )
}

export default addtodo