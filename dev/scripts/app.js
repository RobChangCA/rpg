import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Character from './components/Character'
import { 
    BrowserRouter as Router, 
    Route, Link, NavLink } from 'react-router-dom';
class App extends React.Component{
	constructor(props){
		super();
		this.state={
		};
	}
	render(){
		return(
			<div> 
				<Character />   
			</div> 
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
