import React ,{ Component } from 'react';
import { Container ,Breadcrumb } from 'react-bootstrap';

import './Concesiones_main.css';


export default class Concesiones_main extends Component{
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
          <Container className="ContenedorConcesiones_main" fluid>
              <Container fluid>
                  <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                      Permisos
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Concesiones</Breadcrumb.Item>
                  </Breadcrumb>
              </Container>
          </Container>
        );
    }
}




