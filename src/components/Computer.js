import classes from './Computer.module.css';
import { useEffect, useState} from 'react';
import englishWords from '../assets/wordsGame.json';
import ErrorModal from './ErrorMosal';



function Computer(props){
    const [error,setError]=useState();
    const[inputword,setInputWord]=useState('');
    const [stop,setStop]=useState(true);
    const [computerWord,setcomputerWords]=useState('');

    const letters=['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
    const dictionary=[];
    let flag=true;
    let help=true;

    const  begin=()=>{
        let first=letters[Math.floor(Math.random() * letters.length)];
        while(help){
            let index=Math.floor(Math.random() * dictionary.length);
            let temp1=String(dictionary[index]);
            if(first===temp1[0]){
                setcomputerWords(temp1.toLocaleLowerCase());
                return;
            }
        }
    }
    useEffect(()=>{
        englishWords.map((data)=>dictionary.push(String(data)));
        if(help){
            begin();
            return;
        }
    },[]);

    const InputWordHandler=event=>{
        setInputWord(String(event.target.value));
    } 

    const computerChoice=(letter)=>{
        let temp=true;
        while(temp){
            let index=Math.floor(Math.random() * dictionary.length);
            if(String(letter)===String(dictionary[index])[0]){
                return String(dictionary[index]);
            }
        }
    }

    const buttonHandler=()=>{
        let trigger=true;
        if(flag===true){
            englishWords.map((data)=>dictionary.push(String(data)));
            flag=false;
        }
        while(trigger){
            
            if(computerWord[computerWord.length-1]!== inputword[0] && dictionary.includes(inputword)){
                setStop(true);
                props.stopGame(true);
                return;
            }
            if(!dictionary.includes(inputword)){
                setError({title:"Ivalid input", message:"Entered word doesn't exist in english dictionaty.Please enter another word.."});
                setStop(false);
                return;
            }
            setcomputerWords(computerChoice(inputword[inputword.length-1]));
            props.scoreHandling(5);
            trigger=false;
        }
    }

    const ErrorHandler= ()=>{
        setError(null);
        setStop(true);
    };

    return(
        <div className={classes.ComputerContainer}>
            {error && !stop && <ErrorModal  title={error.title} message={error.message} onConfirm={ErrorHandler}/>}
            {stop && <div className={classes.computerField}>
                    <p className={classes.computer}>{computerWord}</p>
            </div>}
           {stop && <div className={classes.inputContainerC}>
                <input className={classes.input} type='text' placeholder="Enter your word here..." onChange={InputWordHandler}/>
                <button className={classes.button} onClick={buttonHandler}>Go!</button>
            </div>}
    </div>
    )
}

export default Computer;