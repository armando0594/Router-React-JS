import React, { Component} from "react";
import { Container, FormGroup, Form, Button, HelpBlock } from 'react-bootstrap';
import './Login.css';
//import { isEmail, isEmpty, isLength, isContainWhiteSpace } from '../../shared/validator';
import history from "../../utils/history";
import {BrowserRouter as Router, Route,Redirect} from 'react-router-dom';
import axios from 'axios';


/*const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );*/
  
  const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    // Validar errores de formulario estando vacío
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
  
    // validar el formulario fue completado
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
  
    return valid;
  };
  
  export default class Login extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        usuario: null,
        clave: null,
        formErrors: {
            usuario: "",
            clave: ""
        }
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.form = React.createRef();
    }
  
    handleSubmit = e => {
      e.preventDefault();
  
      if (formValid(this.state)) {
        console.log(`
          --SUBMITTING--
          Usuario: ${this.state.usuario}
          Clave: ${this.state.clave}
        `);

        //const FormLogin = new FormData(this.form.current)

            axios.post('http://localhost/api/rest_ci/Usuarios/login', 
            {
                usuario:this.state.usuario,
                clave:this.state.clave
            }
            )
                .then((res) => {
                    console.log(res.data);
                    if(res.data.status === "verdadero"){
                            localStorage.setItem("auth",JSON.stringify(res.data))
                            this.setState({
                                loggedIn: true 
                            })

                            alert("Bienvenido has iniciado sesion....");

                           history.push("/Home");
                    }else{
                        alert("Error, usuario o password incorrectos");
                    }
                }).catch((error) => {
                    console.log(error);
                    alert("No se puede conectar al servidor: "+error);
                });


      } else {
        console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
      }
    };
  
    handleChange = e => {
      e.preventDefault();
      const { name, value } = e.target;
      let formErrors = { ...this.state.formErrors };
  
      switch (name) {
        case "usuario":
            formErrors.usuario =
            value.length < 3 ? "minimum 3 characaters required" : "";
          break;
        case "clave":
          formErrors.clave =
            value.length < 3 ? "minimum 3 characaters required" : "";
          break;
        default:
          break;
      }
  
      this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };
  
    render() {
      const { formErrors } = this.state;
  
      return (
        <div className="wrapper">
          <div className="form-wrapper">
            <h1>INICIAR SESION</h1>
            <form onSubmit={this.handleSubmit} ref={this.form} noValidate>
              <div className="usuario">
                <label htmlFor="Usuario">Usuario</label>
                <input
                  className={formErrors.usuario.length > 0 ? "error" : null}
                  placeholder="Usuario"
                  type="usuario"
                  name="usuario"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.usuario.length > 0 && (
                  <span className="errorMessage">{formErrors.usuario}</span>
                )}
              </div>
              <div className="clave">
                <label htmlFor="clave">Contraseña</label>
                <input
                  className={formErrors.clave.length > 0 ? "error" : null}
                  placeholder="Password"
                  type="password"
                  name="clave"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.clave.length > 0 && (
                  <span className="errorMessage">{formErrors.clave}</span>
                )}
              </div>
              <div className="createAccount">
                <button type="submit"> Entrar</button>
                <small>Already Have an Account?</small>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
  
 