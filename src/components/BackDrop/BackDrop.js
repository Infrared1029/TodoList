import React from 'react';
import { connect } from 'react-redux';


import classes from './BackDrop.module.css';



const backdrop = (props) => (
    <div className={classes.backdrop} onClick={props.cancel}/>
)


const mapDispatchToProps = (dispatch) => {
    return {
        cancel: () => dispatch({type: 'CANCEL'})
    }
}


export default connect(null, mapDispatchToProps)(backdrop);