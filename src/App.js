import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    email: "",
    password: "",
    emailEdited: false,
    passwordEdited: false
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  handleEmailEdit = () => {
    this.setState({ emailEdited: true });
  };

  handlePasswordEdit = () => {
    this.setState({ passwordEdited: true });
  };

  render() {
    const showNoAtInEmail =
      this.state.emailEdited && this.state.email.indexOf("@") === -1;
    const showPasswordTooShort =
      this.state.passwordEdited && this.state.password.length < 8;
    return (
      <div className="App">
        <form>
          <label htmlFor="email">E-Mail</label>
          <br />
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            onBlur={this.handleEmailEdit}
          />
          <p
            style={{ visibility: showNoAtInEmail ? "visible" : "hidden" }}
            className="hint"
          >
            Achtung, die Adresse enthält kein @.
          </p>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            onBlur={this.handlePasswordEdit}
          />
          <p
            style={{ visibility: showPasswordTooShort ? "visible" : "hidden" }}
            className="hint"
          >
            Das Passwort muss mindestens 8 Zeichen lang sein.
          </p>
          <button type="submit">Log-in</button>
        </form>
      </div>
    );
  }
}

export default App;
