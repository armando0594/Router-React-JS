import React, { Component } from 'react';

import { Switch, Route, Router,Redirect } from 'react-router-dom';
import history from "./utils/history";

import {Container } from 'react-bootstrap';

import BarraNavegacion from './components/BarraNavegacion/BarraNavegacion';
//pages
import Login from './components/Login/Login';
import Home from './components/Home/Home';

import Concesiones_main from './Concesiones/Concesiones_main';

//CONCESIONARIOS
import Concesionarios_main from './Concesionarios/Concesionarios_main';
import NuevoConsecionario from './Concesionarios/NuevoConsesionario/NuevoConsesionario';
import ConsultaPersonasFisicas from './Concesionarios/ConsultaPersonasFisicas/ConsultaPersonasFisicas';






class App extends Component {
	constructor(props){
		super(props);
		
        const token = localStorage.getItem("auth");

		let loggedIn = true;
		let logout = false;

        if(token == null){
			loggedIn = false,
			logout = true
        }

        this.state = {
			loggedIn,
			logout
        }
	}
	


render() { 

	if(this.state.loggedIn == false){
		//return <Redirect to='/'  />
		history.push("/");
	 }

	let navBar = this.state.loggedIn ? <BarraNavegacion /> : '';

	return (
			<Router history={history}>
			{ navBar }
				<Switch>
					<Route path="/" exact >	
						<Login />
					</Route>
					<Route path="/Home" exact>
						<Home />
					</Route>			
					<Route path="/Login" exact>
						<Login />
					</Route>
					<Route path="/Concesionarios_main" exact>
						<Concesionarios_main />
					</Route>
					<Route path="/Concesionarios_main" exact>
						<Concesionarios_main />
					</Route>
					<Route path="/NuevoConsecionario" exact>
						<NuevoConsecionario />
					</Route>
					<Route path="/ConsultaPersonasFisicas" exact>
						<ConsultaPersonasFisicas />
					</Route>
				</Switch>
			</Router>
		);
	}
}

export default App;
