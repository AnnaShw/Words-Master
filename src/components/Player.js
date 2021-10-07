import classes from './Computer.module.css';
import { useState} from 'react';
import englishWords from '../assets/wordsGame.json';
import ErrorModal from './ErrorMosal';

function Player(props){
    const [error,setError]=useState();
    const[inputword,setInputWord]=useState();
    const dictionary=[];
    let flag=true;
    const [stop,setStop]=useState(true);
    const [oponentWord,setOponentWords]=useState('');
    
    const JSonHandler=()=>{
        englishWords.map((data)=>dictionary.push(String(data)));
    }

    const InputWordHandler=event=>{
        setInputWord(String(event.target.value).toLocaleLowerCase());
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
        setStop(true);
    };

    const buttonHandler=()=>{
        let trigger=true;

        if(flag===true){
            JSonHandler();
            flag=false;
        }

        if(!dictionary.includes(inputword)){
            setError({title:"Ivalid input", message:"Entered word doesn't exist in english dictionaty.Please enter another word.."});
            setStop(false);
            return;
        }

        while(trigger){
            if(oponentWord!=='' && (oponentWord[oponentWord.length-1]!== inputword[0])){
                setStop(true);
                props.stopGame(true);
                return;
            }
            setOponentWords(OponentChoice(inputword[inputword.length-1]));
            props.scoreHandling(5);
            trigger=false;
        }
    }

    return(
        <div className={classes.playerContainer}>
            {error && !stop && <ErrorModal title={error.title} message={error.message} onConfirm={ErrorHandler}/>}
            {stop && <div className={classes.inputContainer}>
                <input className={classes.input} type='text' placeholder="Enter your word here..." onChange={InputWordHandler}/>
                <button className={classes.button} onClick={buttonHandler}>Go!</button>
            </div>}
                <div className={classes.computerField}>
                {stop && <div>
                        <p className={classes.computer}>{oponentWord}</p>
                </div>}
            </div>
        </div>
    )
}

export default Player;