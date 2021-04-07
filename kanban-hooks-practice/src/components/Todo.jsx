
export default function Todo({name, updateTodo, deleteTodo, number}) {
    function handleNameChange(e) {
        e.preventDefault();
        let newName = e.target.value;
        updateTodo(name,newName, number);
    }
    function handleColumnChange(direction) {
        let newNumber
        if(direction === "prev" && number > 0) {
            newNumber = number - 1;
            updateTodo(name, name, newNumber);
        } else if(direction === "next" && number < 3) {
            newNumber = number + 1;
            updateTodo(name, name, newNumber);
        }
        // updateTodo(name,name,newNumber);
    }

    function handleDelete() {
        deleteTodo(name);
    }
    return(
        <div>
            <div className="name-and-arrows">

            <button disabled={number === 0} onClick={() => handleColumnChange("prev")} >{'<'}</button>
            <input type="text" name="" id="" onChange={handleNameChange} value={name}/>
            <button disabled={number === 3} onClick={() => handleColumnChange("next")}>{'>'}</button>
            </div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}