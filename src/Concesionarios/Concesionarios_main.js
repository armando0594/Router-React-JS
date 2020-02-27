import React ,{ Component } from 'react';
import { Container ,Breadcrumb,Dropdown } from 'react-bootstrap';

import history from "../utils/history";

import './Concesionarios_main.css';


export default class Concesionarios_main extends Component{
  constructor(props){
    super(props);
    //obtiene los datos de session y los guarda en el localstorage
    const token = localStorage.getItem("auth");
    let loggedIn = true;

    if(token == null){
        loggedIn = false
    }

    this.state = {
        loggedIn
    }

}


render(){
        return(
          <Container fluid className="ContenedorConcesionarios_main">

            <Container fluid>
                <Breadcrumb>
                  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Permisos
                  </Breadcrumb.Item>
                  <Breadcrumb.Item active>Concesionarios</Breadcrumb.Item>
                </Breadcrumb>
            
                
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          Menu de opciones
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item  onClick={(e): void => { e.preventDefault(); window.location.href='/NuevoConsecionario';}}>Nuevo Concesionario </Dropdown.Item>
                          <Dropdown.Item onClick={(e): void => { e.preventDefault(); window.location.href='/ConsultaPersonasFisicas';}}>Consulta Personas Fisicas</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Consulta Personas Morales</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Consulta al Padron General</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Consulta por RFC</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                
                 
          </Container>

          </Container>
        );
    }
}




