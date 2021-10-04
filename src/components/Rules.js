import classes from './Rules.module.css';

function Rules(){
    return (
    <div className={classes.rules}>
        <p>Rules of the game:</p>
        <ol type="1">
            <li>Chose who gonna be first: you or computer.</li>
            <li>Press "Let's play" button.</li>
            <li>Remember: You need to enter a word that begins with the last letter of the opponent's word. </li>
        </ol>
    </div>
    )
}
export default Rules;