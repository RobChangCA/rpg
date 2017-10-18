import React, {Component} from 'react';

class Buttons extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <button onClick={console.log(this)}>APPLY FOR A JOB</button>
                <button>DRINK COFFEE</button>
                <button>WATCH A YOUTUBE TUTORIAL</button>
                <button>SLEEP</button>
                <button>PLAY A GAME</button>
                <button>EAT</button>
                <button>WRITE A BLOG POST</button>
            </div>
        )
    }
} 

export default Buttons;