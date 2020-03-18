import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    const showNoAtInEmail = false;
    const showPasswordTooShort = false;
    return (
      <div className="App">
        <form>
          <label htmlFor="email">E-Mail</label>
          <br />
          <input type="text" name="email" />
          <p
            style={{ visibility: showNoAtInEmail ? "visible" : "hidden" }}
            className="hint"
          >
            Achtung, die Adresse enthält kein @.
          </p>
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" name="password" />
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
