import { useState } from 'react';

import('./CreateTodo.css');

export function CreateTodo(){
    const[title,setTitle] = useState("");
    const[description,setDescription] = useState("");
    function addTodo(){
        fetch("http://localhost:3000/todo",{
            method : "POST",
            body :JSON.stringify({
                title : title,
                description : description
            }),
            headers:{
                "Content-Type" : "application/json"
            }
        })
        .then(async function(res){
            const json = await res.json();
        })
    }

    function titleHandler(e){
        const value = e.target.value;
        setTitle(value);
    }

    function descriptionHandler(e){
        const value = e.target.value;
        setDescription(value);
    }

    return (
        <div>
            <input className="inputFields" type="text" placeholder="title" onChange={titleHandler} />
            <input className="inputFields" type="text" placeholder="description" onChange={descriptionHandler} />
            <button className='btn' onClick={addTodo}>Add a todo</button>
        </div>
    )
}