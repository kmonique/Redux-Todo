import React from "react"
import styled from "styled-components";

//style component adds a line through if the todo.complete is true
const Task = styled.ul`
   ${props => props.complete ? `text-decoration: line-through` : null}
`;

//renders each todo item
const Todo = (props) => {
   return(
      <div>
         <Task onClick={props.toggle} complete={props.completed}>{props.todo.value}</Task>
      </div>
   )
}

export default Todo