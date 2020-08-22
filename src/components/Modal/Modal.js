import React from 'react';
import { connect } from 'react-redux';

import classes from './Modal.module.css';



const modal = (props) => (

    <div className={classes.modal}>
        <h2>What do you have To Do?</h2>
        <textarea onChange={props.updateNewTodo} placeholder='Enter your text..'/>
        <button onClick={props.addNewTodo}>Create Todo</button>
    </div>
)


const mapDispatchToState = (dispatch) => {
    return {
        updateNewTodo: (event) => dispatch({type: 'UPDATE_NEW_TODO', event: event}),
        addNewTodo: () => dispatch({type: 'ADD_TODO'})
    }
}


export default connect(null, mapDispatchToState)(modal);