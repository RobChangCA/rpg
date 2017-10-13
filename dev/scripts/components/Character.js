import React, {Component} from 'react';

class Character extends React.Component{
    constructor(){
        super();
        this.state={
            energy: 100,
        }
        this.jobApplication = this.jobApplication.bind(this);
    }
    
    jobApplication(event){
        event.preventDefault();
        if(this.state.energy > 30){
            this.setState({
                energy: this.state.energy - 30, 
            })
            console.log(this.state);
        }else{
            alert('not enough energy');
        }
        
    }
    render(){
        
        return(
            <div>
                <button onClick={this.jobApplication}>APPLY FOR A JOB</button>
                <h2>ENERGY: {this.state.energy}</h2>
            </div>
        )
    }
}

export default Character;