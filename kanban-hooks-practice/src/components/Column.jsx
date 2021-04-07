import react, { useState } from 'react';
import Todo from './Todo';
import './Column.css'

export default function Column({todos,number,name, updateTodo, deleteTodo}) {
    
    function renderTodos(todos) {
        return Object.keys(todos).map(todo => {
            if (todos[todo] === number) {
                return(
                    <div>
                        <Todo name={todo} number={number} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                    </div>
                )
            }
        })
    }

    return(
        <div className="column">{name}
        {renderTodos(todos)}
        </div>
    )
}