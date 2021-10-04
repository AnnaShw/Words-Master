import React from "react";
import classes from './ErrorModal.module.css';

const ErrorModal=props=>{
    return (
        <div className={classes.mainContainer}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
                <button onClick={props.onConfirm} >Close</button>            
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
        </div>
    )};

export default ErrorModal;