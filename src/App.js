import React, { Component } from "react";
import "./bootstrap.min.css";
import Headers from "./components/Headers";
import NewCites from "./components/NewCites";

class App extends Component {
  state = {
    citas: []
  };

  createNewCites = data => {
    // copiar el state actual
    const citas = [...this.state.citas, data];
    // agregar el nuevo state
    this.setState({ citas });
  };

  render() {
    return (
      <div className="container">
        <Headers title="Administrador Pacientes Veterinaria" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NewCites createNewCites={this.createNewCites} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
