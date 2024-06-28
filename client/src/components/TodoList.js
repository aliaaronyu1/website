import React, { Fragment } from "react";
import ListTodos from "./ListTodos";
import InputTodo from "./InputTodo";

const TodoList = () => {

    return (
        <Fragment>
            <div className="container">
                <InputTodo />
                <ListTodos />
            </div>
        </Fragment>
    )
}

export default TodoList;