import classes from './Game.module.css';
import { useState} from 'react';
import Player from './Player';
import Computer from './Computer';

//194432 key of last word
function Game(props){
    const [score,setScore]=useState(0);
    const updateScore=(val)=>{
        setScore(score+val);
    }

    const [stop,setStop]=useState(false);
    const StopGame=()=>{setStop(true);console.log(stop)}

    return(
        <div className={classes.gameContainer}>
            {!stop && <div className={classes.insider}>
            <p className={classes.score}>Total score:{score}</p>
            <div className={classes.exitContainer}>
                <button className={classes.resetButton} onClick={StopGame}>X</button>
            </div>
            </div>}
            {props.playerBool && !stop && <div>
                 <Player scoreHandling={updateScore}/>
            </div>}
            {props.computerBool &&<div>
                <Computer scoreHandling={updateScore}/>
            </div>}
            {stop && <p className={classes.FinalStatement}>End of Game.Total Score:{score}</p>}
        </div>
    )
}

export default Game;