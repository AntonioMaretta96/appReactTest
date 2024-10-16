import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  console.log("Variabili d'ambiente:", process.env);

  const fetchRandomUser = async () => {
    try {
      setToken(process.env.REACT_APP_TOKEN_MONGO);
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      setUser(data.results[0]);
      console.log("tokennnnnnn", token);
    } catch (error) {
      console.error("Errore nella richiesta:", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Benvenuto!</p>
        <h5>Demo App React deployata su Web App statica di Azure</h5>

        <button onClick={fetchRandomUser}>
          Ottieni Utente Random da api test! test{" "}
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaawqw
        </button>

        {/* Mostra i dettagli dell'utente se presente */}
        {user && (
          <div>
            <h6>Dettagli Utente:</h6>
            <p>
              <strong>Nome:</strong> {user.name.first} {user.name.last}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Telefono:</strong> {user.phone}
            </p>
            <p>
              <strong>Indirizzo:</strong> {user.location.city},{" "}
              {user.location.country}
            </p>
            <img src={user.picture.large} alt="User" />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
