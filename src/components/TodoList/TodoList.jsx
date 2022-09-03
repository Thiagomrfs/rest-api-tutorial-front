import React from "react";
import './TodoList.css'

import Todo from "../Todo/Todo";

export default function TodoList (props) {
    const todos = props.todos

    return (
        <div className="todo--list">
            <table>
                <thead>
                    <tr>
                        <th>titulo</th>
                        <th>descrição</th>
                        <th>prioridade</th>
                        <th>ações</th>
                    </tr>
                </thead>
                <tbody>
                {
                    todos.map((todo, index) => {
                        return <Todo todo={todo} key={index} />
                    })
                }
                </tbody>
            </table>
        </div>
    )
}