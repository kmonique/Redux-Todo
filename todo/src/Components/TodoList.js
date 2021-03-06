import React from "react"
import {connect} from "react-redux";
import {toggle} from "./action"
import Todo from "./Todo";

//renders the list of todo items
const TodoList = (props) => {
   return(
      <div>
         {props.todos.map(todo =>
            <Todo 
               key={todo.id}
               todo={todo}
               id={todo.id}
               task={todo.task}
               completed={todo.completed}
               toggle={() => props.toggle(todo.id)}
            />
            )}
      </div>
   )
}

//maps state to props
const mapStateToProps = (state) => {
   return {todos: state.todos}
}

export default connect(mapStateToProps, {toggle})(TodoList)