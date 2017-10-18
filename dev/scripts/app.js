import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Buttons from './components/Buttons';
import StatusDisplay from './components/StatusDisplay';
import { 
    BrowserRouter as Router, 
    Route, Link, NavLink } from 'react-router-dom';
class App extends React.Component{
	constructor(props){
		super();
		this.state={
			energy: 100,
			happiness: 100,
			codingSkills: 0,
		};
	}
	jobApplication(event){
        event.preventDefault();
        if(this.state.energy >= 30 && this.state.happiness >= 20){
            this.setState({
                energy: this.state.energy - 30,
                happiness: this.state.happiness - 10, 
            })
            console.log(this.state);
        }else{
            if(this.state.energy <=30 && this.state.happiness <=20){
                alert('YOU NEED MORE ENERGY AND HAPPINESS');
            }else if(this.state.energy <=30){
                alert('YOU NEED MORE ENERGY');
            }else{
                alert('YOU NEED TO CHEER UP BEFORE YOU GO ON!');
            }
        }  
    }
    drinkCoffee(event){
        event.preventDefault();
        this.setState({
            energy: this.state.energy + 20,
            happiness: this.state.happiness + 5,
        })
    }
    watchYoutube(event){
        event.preventDefault();
        if(this.state.energy >= 50 && this.state.happiness >= 50){
            this.setState({
                energy: this.state.energy - 50,
                codingSkills: this.state.codingSkills + 1.5,
            })
        }
    }
    sleep(event){
        event.preventDefault();
        this.setState({
            energy: this.state.energy +50,
        })
    }
    eat(event){
        event.preventDefault();
        this.setState({
            energy: this.state.energy + 30,
        })
    }
    game(event){
        event.preventDefault();
        this.setState({
            happiness: this.state.happiness + 20,
        })
    }
    blog(event){
        event.preventDefault();
        this.setState({
            energy: this.state.energy - 30,
            codingSkills: this.state.codingSkills + .5,

        })
    }
	render(){
		return(
			<div> 
				<Buttons />
				<StatusDisplay 
					energy={this.state.energy}
					happiness={this.state.happiness}
					code={this.state.codingSkills}
				/>    
			</div> 
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
