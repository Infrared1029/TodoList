import React from 'react';
import classes from './Layout.module.css';
import { connect } from 'react-redux';



const layout = (props) => (
    <header className={classes.head}>
        <button onClick={props.createTodo}>+ CREATE NEW TODO</button>
    </header>
)



const mapDispatchToProps = (dispatch) => {
    return {
    createTodo: () => dispatch({type: 'CREATE_TODO'})
    } 
}

export default connect(null, mapDispatchToProps)(layout);