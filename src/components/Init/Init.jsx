/* 
Init react compoment
To select a username and select the operation
*/
// Css
import "./Init.css";

// React
import { Component } from "react";

class Init extends Component {
  constructor({ setUsername, setOperation, setLogged}) {
    super();
    this.setUsername = setUsername;
    this.setOperation = setOperation;
    this.setLogged = setLogged;    
    this.state = {
      username: "",
      operation: "+",
      correct_fields: true,
    };
  }

  render() {
    return (
      <div className="content">
        <div className="login">
          <h1>Bienvenido</h1>
          <h3>Ingrese su nombre:</h3>
          <input type="text" onChange={this.onChangeUsername} />
          {this.state.correct_fields ? (
            <></>
          ) : (
            <p className="error-message">Ingrese un nombre válido</p>
          )}
          <select value={this.state.value} onChange={this.onChangeOperation}>
            <option value="+">Suma</option>
            <option value="-">Resta</option>
            <option value="*">Multiplicación</option>
            <option value="/">División</option>
          </select>
          <button onClick={this.handleSignIn}>Ingresar</button>
        </div>
      </div>
    );
  }

  handleSignIn = (event) => {
    if (this.state.username.length < 2) {
      this.setState({
        correct_fields: false,
      });
    } else {
      this.setUsername(this.state.username);
      this.setOperation(this.state.operation);
      this.setLogged(true);      
    }
  };

  onChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  onChangeOperation = (event) => {
    this.setState({
      operation: event.target.value,
    });
  };
}

export default Init;
