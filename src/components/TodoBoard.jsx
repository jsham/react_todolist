import React from "react"
import TodoItem from "./TodoItem"


function TodoBoard (props) {
    // console.log ("todoBoard", props.todoList)
    return (
        <div>
            <h1> Todo List</h1>
            {
                props.todoList.map((item)=><TodoItem item={item}/>) // Array 의 내용을 보여주고 싶을 때. Map 이용 
            }
        </div>
    )
}
export default TodoBoard