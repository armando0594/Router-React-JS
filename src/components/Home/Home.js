import React ,{ Component } from 'react';
import { Container ,Row, Col ,Image, Button } from 'react-bootstrap';
//css
import './Home.css';

export default class Home extends Component{
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
          <Container className="text-center ContenedorHome" fluid>
            <h1>Bienvenido</h1>
                <Row>
                  <Col xs={12} md={12} lg={12}>
                    <Image src="./imagenes_sistema/municipio.png"  rounded />
                  </Col>
                </Row> 
          </Container>
          
        );
    }
}

