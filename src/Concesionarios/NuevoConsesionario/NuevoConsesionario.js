/*import React,{ Component,useState } from 'react';
import { Container, Form, Col, InputGroup, Button, Card,Breadcrumb} from 'react-bootstrap';

 //history para navegar entre paginas
 

 export default class NuevoConcesionario extends Component{

    render(){
   
    const [validated, setValidated] = useState(false);

    const handleSubmit = event => {
        const form = event.currentTarget;

            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }

        setValidated(true);
    };

    return (
        <Container className="mt-3" fluid>

          <Card>
            <Card.Header as="h5">DATOS DEL CONCESIONARIO</Card.Header>
            <Card.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                      <Form.Row>

                        <Form.Group as={Col} md="6" controlId="exampleForm.ControlSelect1">
                            <Form.Label>Tipo de persona</Form.Label>
                            <Form.Control as="select">
                                <option value="F">FISICA</option>
                                <option value="M">MORAL</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} md="2" controlId="validationCustom01">
                          <Form.Label>RFC</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Campo 1"
                            //defaultValue="Mark"
                          />
                          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                          <Form.Control.Feedback type="invalid">
                              El campo 1 es requerido!!
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="2" controlId="validationCustom01">
                        <Form.Label>&nbsp;</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Campo 2"
                            //defaultValue="Mark"
                          />
                          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                          <Form.Control.Feedback type="invalid">
                              El campo 2 es requerido!!
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="2" controlId="validationCustom01">
                        <Form.Label>&nbsp;</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Campo 3"
                            //defaultValue="Mark"
                          />
                          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                          <Form.Control.Feedback type="invalid">
                            El campo 3 es requerido!!
                            </Form.Control.Feedback>
                        </Form.Group>
                        </Form.Row>
                     
                      <Form.Row>

                        <Form.Group as={Col} md="3" controlId="validationCustom02">
                          <Form.Label>Nombres</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Escribe tu nombre"
                            defaultValue="Otto"
                          />
                          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                          <Form.Control.Feedback type="invalid">
                            El campo nombre es requerido!!
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="3" controlId="validationCustomUsername">
                          <Form.Label>Segundo nombre</Form.Label>
                          <InputGroup>
                            <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                              type="text"
                              placeholder="Segundo nombre"
                              aria-describedby="inputGroupPrepend"
                              required
                            />
                            <Form.Control.Feedback type="invalid">
                            El campo nombre es requerido!!
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>

                        <Form.Group as={Col} md="3" controlId="validationCustomUsername">
                          <Form.Label>Apellido paterno</Form.Label>
                          <InputGroup>
                            <InputGroup.Prepend>
                           <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                              type="text"
                              placeholder="Segundo nombre"
                              aria-describedby="inputGroupPrepend"
                              required
                            />
                            <Form.Control.Feedback type="invalid">
                            El campo nombre es requerido!!
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>

                        <Form.Group as={Col} md="3" controlId="validationCustomUsername">
                          <Form.Label>Apellido materno</Form.Label>
                          <InputGroup>
                            <InputGroup.Prepend>
                           <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                              type="text"
                              placeholder="Apellido materno"
                              aria-describedby="inputGroupPrepend"
                              required
                            />
                            <Form.Control.Feedback type="invalid">
                            El campo nombre es requerido!!
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>

                      </Form.Row>

                      <Form.Row>
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                          <Form.Label>Curp</Form.Label>
                          <Form.Control type="text" placeholder="Curp" required />
                            <Form.Control.Feedback type="invalid">
                              El curp es requerido!!
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="validationCustom04">
                          <Form.Label>Telefono</Form.Label>
                          <Form.Control type="text" placeholder="telefono" required />
                          <Form.Control.Feedback type="invalid">
                             El Telefono es requerido!!
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="validationCustom05">
                          <Form.Label>Fax</Form.Label>
                          <Form.Control type="text" placeholder="Escribe tu fax" required />
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="validationCustom05">
                          <Form.Label>E-mail</Form.Label>
                          <Form.Control type="text" placeholder="Escribe tu email" required />
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="validationCustom05">
                          <Form.Label>Nacionalidad</Form.Label>
                              <Form.Control as="select">
                                    <option value="N">FISICA</option>
                                    <option value="E">EXTRANGERA</option>
                              </Form.Control>
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                          </Form.Control.Feedback>
                        </Form.Group>

                      </Form.Row>

                      <Container fluid className="mb-3">
                          <h5> DIRECCION CONCESIONARIO</h5>
                      </Container>

                      <Form.Row>
                        <Form.Group as={Col} md="2" controlId="validationCustom03">
                          <Form.Label>Clave catastral</Form.Label>
                          <Form.Control type="text" placeholder="Campo 1" required />
                            <Form.Control.Feedback type="invalid">
                              El campo 1 clave catastral requerido!!
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="2" controlId="validationCustom04">
                          <Form.Label>&nbsp;</Form.Label>
                          <Form.Control type="text" placeholder="Campo 2" required />
                          <Form.Control.Feedback type="invalid">
                             El campo 2 es requerido!!
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="2"  controlId="validationCustom05">
                          <Form.Label>&nbsp;</Form.Label>
                          <Form.Control type="text" placeholder="Campo 3" required />
                          <Form.Control.Feedback type="invalid">
                            El campo 3 es requerido!!
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="validationCustom05">
                          <Form.Label>Calle</Form.Label>
                          <Form.Control type="text" placeholder="Escribe tu email" required />
                          <Form.Control.Feedback type="invalid">
                            El campo calle es requerido!!
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Form.Row>

                      <Form.Row>
                        <Form.Group as={Col} md="2" controlId="validationCustom03">
                          <Form.Label># Oficial</Form.Label>
                          <Form.Control type="text" placeholder="# oficial" required />
                            <Form.Control.Feedback type="invalid">
                              El campo # oficial es requerido!!
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="2" controlId="validationCustom04">
                          <Form.Label>L. Interior</Form.Label>
                          <Form.Control type="text" placeholder="L. interior" required />
                          <Form.Control.Feedback type="invalid">
                             El campo L. interior es requerido!!
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="6"  controlId="validationCustom05">
                          <Form.Label>Colonia</Form.Label>
                          <Form.Control type="text" placeholder="Nombre colonia" required />
                          <Form.Control.Feedback type="invalid">
                            La colonia es requerido!!
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="2" controlId="validationCustom05">
                          <Form.Label>Codigo postal</Form.Label>
                          <Form.Control type="text" placeholder="Escribe c.p." required />
                          <Form.Control.Feedback type="invalid">
                            El campo codigo postal es requerido!!
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Form.Row>


                      <Button type="submit" className="btn btn-block">Alta concesionario</Button>
                  </Form>

              </Card.Body>
            </Card>
        </Container>
    );
}
}
*/
import React,{ Component } from 'react';
export default class NuevoConcesionario extends React.Component {
    render() {
      return (
        <div className="shopping-list">
          <h1>Shopping List for </h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
        </div>
      );
    }
  }