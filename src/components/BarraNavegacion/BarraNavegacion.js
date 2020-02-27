import React, { Component } from 'react';

import {Navbar , Nav, NavDropdown, Button,Container } from 'react-bootstrap';

import {
    BrowserRouter as Router,
    withRouter 
    ,NavLink
  } from "react-router-dom";

  //css del navbar

  import './BarraNavegacion.css';

    //history para navegar entre paginas
  import history from "../../utils/history";


 class BarraNavegacion extends Component {
    constructor(props) {
        super(props);
        //obtiene los datos de session y los guarda en el localstorage
        const token = localStorage.getItem("auth");

        let loggedIn = true;
        let logout = false;

        if(token){
            loggedIn = false,
            logout = true
        }

        this.state = {
            loggedIn,
            logout
        }
      }


    /**
     * path para aceder alos components
     * 
     */
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }

    /**
     * metodo para cerrar la sesion
     */
    goLogout = e => {
        e.preventDefault();
        localStorage.removeItem("auth");
        sessionStorage.clear(); 
        this.setState({ logout: true });
        history.push("/");
        
    }

    goHome(){
        history.push("/Home");
    }

 
    render() {
       /* if (window.location.pathname === '/Login') return null;

        if (window.location.pathname === '/') return null;*/

        if(window.location.pathname === '/' || window.location.pathname === '/Login'){
            return null;
        }

        return (
           <Navbar collapseOnSelect expand="lg" fixed="top" bg="light"  id="barraNavegacion">
                <Navbar.Brand href="#home">ZONA FEDERAL</Navbar.Brand> 
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={this.goHome}>Inicio</Nav.Link>
                    <NavDropdown title="Permisos" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Cambios por oficio</NavDropdown.Item>
                       
                            <NavDropdown.Item className={this.getNavLinkClass("/Concesionarios_main")}> <NavLink to="/Concesionarios_main" >Concesionarios</NavLink></NavDropdown.Item>
                           {/* <NavDropdown.Item className={this.getNavLinkClass("/NuevoConsecionario")} toggle={false}> <NavLink to="/NuevoConsecionario" >nuevo Concesionarios</NavLink></NavDropdown.Item>*/}
                        <NavDropdown.Item className={this.getNavLinkClass("/Concesiones_main")}><NavLink to="/Concesiones_main" >Consesiones </NavLink></NavDropdown.Item>
                    </NavDropdown>
                   
                  
        
                    </Nav>
                    
                  
                    <Button variant="outline-success" onClick={this.goLogout}>Cerrar sesion</Button>
                   
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
BarraNavegacion = withRouter(BarraNavegacion);
export default BarraNavegacion;
