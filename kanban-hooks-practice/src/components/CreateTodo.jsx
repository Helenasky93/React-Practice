import { useState } from "react";


export default function CreateTodo({createTodo}) {
    const [name, setName] = useState("")
    function handleCreate() {
        createTodo(name);
        setName("");
    }
    return(
        <div>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
            <button onClick={handleCreate}>Create</button>
            
        </div>
    )
}