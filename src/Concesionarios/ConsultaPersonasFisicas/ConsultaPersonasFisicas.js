import React from 'react';
import { Table, Button } from 'react-bootstrap';

class ConsultaPersonasFisicas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      personasFisicas: []
    }
  }

  componentDidMount() {
    const apiUrl = 'http://localhost/api/rest_ci/PersonasFisicas/ConsultaPersonasFisicas';

    fetch(apiUrl)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            personasFisicas: result
          });

          console.log("aqui"+result);
        },
        (error) => {
          this.setState({ error });
        }
      )
  }

  render() {
    const { error, personasFisicas} = this.state;

    if(error) {
      return (
        <div>Error: {error.message}</div>
      )
    } else {
      return(
        <div>
          <h2>Product List</h2>
          <Table>
            <thead>
              <tr>
                <th>#RFC</th>
                <th>TIPO PER Name</th>
                <th>NOMBRE</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {personasFisicas.map(personasFisicas => (
                <tr key={personasFisicas.RFC}>
                  <td>{personasFisicas.TIPOPER}</td>
                  <td>{personasFisicas.NOMBRE1}</td>
                  <td>{personasFisicas.NOMBRE2}</td>
                  <td>{personasFisicas.APATERNO}</td>
                  <td>{personasFisicas.AMATERNO}</td>
                  <td><Button variant="info" onClick={() => this.props.editProduct(personasFisicas.RFC)}>Edit</Button></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )
    }
  }
}

export default ConsultaPersonasFisicas;