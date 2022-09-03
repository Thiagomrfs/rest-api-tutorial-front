import React, { useState } from "react";
import './Todo.css'

import api from '../../services/api';

export default function Todo (props) {
    const [editing, setEditing] = useState(false)
    const [todo, setTodo] = useState(props.todo)

    const handleDelete = (id) => {
        api.delete(`/todos/${id}`).then(res => {
            console.log(res)
            window.location.reload()
        }).catch(err => console.log(err))
    }

    const handleSave = (id) => {
        api.patch(`/todos/${id}`, todo)
        .then(res => {
            console.log(res)
            setEditing(false)
            window.location.reload()
        })
        .catch(err => console.log(err))
    }

    return (
        <tr>
            <td>
                <input 
                    value={todo.titulo} 
                    disabled={!editing} 
                    onChange={(e) => setTodo(todo => ({...todo, titulo: e.target.value}))}
                />
            </td>
            <td>
                <input 
                    value={todo.description} 
                    disabled={!editing} 
                    onChange={(e) => setTodo(todo => ({...todo, description: e.target.value}))}
                />
            </td>
            <td>{todo.priority}</td>
            <td>
                {!editing ?
                    <div>
                        <button onClick={() => setEditing(true)}>editar</button>
                        <button onClick={() => handleDelete(todo.id)}>deletar</button>
                    </div>
                    :
                    <div>
                        <button onClick={() => {
                            setTodo(props.todo)
                            setEditing(false)
                        }}>cancelar</button>
                        <button onClick={() => handleSave(todo.id)}>salvar</button>
                    </div>

                }
            </td>
        </tr>
    )
}