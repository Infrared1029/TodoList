import React from 'react';
import { connect } from 'react-redux';
import classes from './Todo.module.css';

class Todo extends React.Component{
    
    

render(){

    let divClasses = [classes.container]

    if (this.props.checked)
    { 
        divClasses.push(classes.checked)
    }

   return ( <div className={divClasses.join(' ')}>
        <input type='checkbox' onClick={this.props.toggleTodo}></input>
        <button onClick={this.props.deleteTodo}>X</button>
        <p>{this.props.text}</p>
    </div>
)
   };

}


const mapDispatchToProps = (dispatch, props) => {
    return {
    toggleTodo: () => dispatch({type: 'TOGGLE_TODO', payload: {id: props.id}}),
    deleteTodo: () => dispatch({type: 'DELETE_TODO', id: props.id})
    }

}

export default connect(null, mapDispatchToProps)(Todo);