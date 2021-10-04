import classes from './Player.module.css';
import { useState} from 'react';
import englishWords from '../assets/wordsGame.json';
import ErrorModal from './ErrorMosal';

function Player(props){
    const [error,setError]=useState();
    const[inputword,setInputWord]=useState();
    const dictionary=[];
    let flag=true;
    const [stop,setStop]=useState(false);
    const [oponentWord,setOponentWords]=useState('');
    
    const JSonHandler=()=>{
        englishWords.map((data)=>dictionary.push(String(data)));
    }

    const InputWordHandler=event=>{
        setInputWord(String(event.target.value));
    } 

    const OponentChoice=(letter)=>{
        let temp=true;
        while(temp){
            let index=Math.floor(Math.random() * dictionary.length);
            if(String(letter)===String(dictionary[index])[0]){
                return String(dictionary[index]);
            }
        }
    }

    const ErrorHandler= ()=>{
        setError(null);
    };

    const buttonHandler=()=>{
        let trigger=true;

        if(flag===true){
            JSonHandler();
            flag=false;
        }

        if(!dictionary.includes(inputword)){
            setError({title:"Ivalid input", message:"Entered word doesn't exist in english dictionaty.Please enter another word.."});
            console.log(error);
            return;
        }

        while(trigger){
            if(oponentWord!=='' && (oponentWord[oponentWord.length-1]!== inputword[0])){
                setStop(true);
                return;
            }
            setOponentWords(OponentChoice(inputword[inputword.length-1]));
            props.scoreHandling(5);
            trigger=false;
        }
    }

    return(
        <div className={classes.playerContainer}>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={ErrorHandler}/>}
            <div className={classes.inputContainer}>
                <input className={classes.input} type='text' placeholder="Enter your word here..." onChange={InputWordHandler}/>
                <button className={classes.button} onClick={buttonHandler}>Go!</button>
            </div>
                <div className={classes.oponentsContainer}>
                {!stop && <div>
                        <p className={classes.oponent}>{oponentWord}</p>
                </div>}
            </div>
        </div>
    )
}

export default Player;