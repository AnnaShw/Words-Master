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
    const StopGame=()=>{setStop(true);}

    return(
        <div className={classes.gameContainer}>
            {!stop && <div className={classes.insider}>
            <p className={classes.score}>Total score:{score}</p>
            <div className={classes.exitContainer}>
                <button className={classes.Button} onClick={StopGame}>X</button>
            </div>
            </div>}
            {props.playerBool && !stop && <div>
                 <Player scoreHandling={updateScore} stopGame={StopGame}/>
            </div>}
            {props.computerBool && !stop &&<div>
                <Computer scoreHandling={updateScore} stopGame={StopGame}/>
            </div>}
            {stop && <div className={classes.FinalStatement}>
                    <p>End of Game.Total Score:{score}</p>
                    <div className={classes.newGame}>
                        <button onClick={props.newGame}>Let's play one more game!</button>
                    </div>
                </div>}
        </div>
    )
}

export default Game;