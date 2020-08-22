import React from 'react';
import { connect } from 'react-redux';

import Todo from './Todo/Todo';


const todoList = (props) => (

    <div>
        {props.todoList.map(todo => <Todo text={todo.text} checked={todo.checked} key={todo.id} id={todo.id}></Todo>)}
    </div>

);

const mapStateToProps = state => (
    {
        todoList: state.todoList,
    }
);

export default connect(mapStateToProps)(todoList);