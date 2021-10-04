import React,{useState} from "react";
import classes from './BeginScreen.module.css';
import {utilsBool} from '../App';
import { begin } from './Computer';

function BeginScreen(props){
    const [playB,setPlayB]=useState(true);
    const [disableP, setDisableP] = useState(false);
    const [disableC, setDisableC] = useState(false);

    const playerBegin=()=>{ 
        utilsBool.player=true;
        setDisableC(true);
        setPlayB(false);
        props.utilsfunc(utilsBool.player,false);
    }

    const computerBegin=()=>{
        utilsBool.computer=true;
        setDisableP(true);
        setPlayB(false);
        props.utilsfunc(false,utilsBool.computer);
    }
      
    return(
        <div className={classes.divBody}>
            <h2>Who gonna be first?</h2>
            <div className={classes.buttonContainer}>
                <button onClick={playerBegin} disabled={disableP}>Me</button>
                <button onClick={computerBegin} disabled={disableC}>Computer</button>
                <button  onClick={props.GameLoading} disabled={playB}>Let's play</button>
            </div>

        </div>
    )
}

export default BeginScreen;