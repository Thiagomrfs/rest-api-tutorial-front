import React, { useEffect, useState } from "react";
import './CreateTodo.css'

import api from '../../services/api';

export default function CreateTodo (props) {
    const [details, setDetails] = useState({
        titulo: "",
        description: "",
        priority: "B"
    })

    const handlePost = () => {
        api.post("/todos/", details).then(res => window.location.reload()).catch(err => console.log(err))
    }

    return (
        <div className="create-todo">
            <div>
                <div>titulo:</div>
                <input 
                    value={details.titulo} 
                    type={"text"} 
                    onChange={(e) => setDetails(details => ({...details, titulo: e.target.value}))}
                />
            </div>
            <div>
                <div>description:</div>
                <input 
                    value={details.description} 
                    type={"text"} 
                    onChange={(e) => setDetails(details => ({...details, description: e.target.value}))}
                />
            </div>
            <button onClick={handlePost}>Criar todo</button>
        </div>
    )
}