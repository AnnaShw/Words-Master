import { useState } from 'react';
import './App.css';
import Rules from './components/Rules';
import BeginScreen from './components/BeginScreen';
import Game from './components/Game';

export var utilsBool={player:null,computer:null};

function App() {
  const [gameInPlay,setgameInPlay]=useState();

  const callbackFunction = (playerB,computerB) => {
    utilsBool.player=playerB;
    utilsBool.computer=computerB;
}
  
  const GameLoading=()=>{setgameInPlay(true);}

  return (
    <div className="App">
      <header className='title'>Words Master!</header>
      <main>
      <Rules/>
      {!gameInPlay && <BeginScreen GameLoading={GameLoading} utilsfunc={callbackFunction}/>}
      {gameInPlay && <Game playerBool={utilsBool.player} computerBool={utilsBool.computer} />}
      </main>
      <footer></footer>
    </div>
  );
  }


export default App;
