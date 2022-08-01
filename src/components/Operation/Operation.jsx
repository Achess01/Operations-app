import { Component } from "react";
import "./Operation.css";

class Operation extends Component {
  constructor({ operation = "*", username = "Invitado", setLogged }) {
    super();
    this.setLogged = setLogged;
    this.state = {
      num1: this.getRandomNumber(),
      num2: this.getRandomNumber(),
      response: "",
      score: 0,
      is_correct: true,
      winner_score: 4,
      operation,
      username,
    };
  }

  renderProblem() {
    return (
      <div className="content">
        <div className={!this.state.is_correct ? "incorrect" : ""} id="problem">
          {this.state.num1} {this.state.operation} {this.state.num2}
        </div>
        <input
          type="number"
          onKeyPress={this.inputKeyPress}
          onChange={this.updateResponse}
          value={this.state.response}
        />
        <div>
          <h2>
            Score: {this.state.score}/{this.state.winner_score}
          </h2>
        </div>
        <h2>Jugador: {this.state.username}</h2>
        <h1>Operations</h1>
      </div>
    );
  }

  renderWinnerScreen() {
    return (
      <div className="content">
        <h1>Felicidades {this.state.username}</h1>
        <h3>Has ganado</h3>
        <button
          className=".btn-back"
          onClick={(e) => {
            this.setLogged(false);
          }}
        >
          Regresar
        </button>
      </div>
    );
  }

  render() {
    if (this.state.score === this.state.winner_score) {
      return this.renderWinnerScreen();
    }
    return this.renderProblem();
  }

  inputKeyPress = (event) => {
    if (event.key === "Enter") {
      if (this.state.response.length > 0) {
        this.checkResponse();
      }
    }
  };

  checkResponse() {
    const userResponse = parseInt(this.state.response);
    const correctResponse = this.getCorrectResult();
    if (userResponse === correctResponse) {
      console.log("Correcto");
      this.setState({
        score: this.state.score + 1,
        response: "",
        is_correct: true,
        num1: this.getRandomNumber(),
        num2: this.getRandomNumber(),
      });
    } else {
      this.setState({
        is_correct: false,
        response: "",
        score: this.state.score === 0 ? 0 : this.state.score - 1,
      });
    }
  }

  getCorrectResult() {
    const n1 = this.state.num1;
    const n2 = this.state.num2;
    let result = 0;
    switch (this.state.operation) {
      case "+":
        result = n1 + n2;
        break;
      case "-":
        result = n1 - n2;
        break;
      case "*":
        result = n1 * n2;
        break;
      case "/":
        result = n1 / n2;
        break;
    }
    return parseInt(result);
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  updateResponse = (event) => {
    this.setState({
      response: event.target.value,
    });
  };
}

export default Operation;
