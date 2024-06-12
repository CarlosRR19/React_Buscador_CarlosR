import { useState } from "react";
import ListaFilter from "./components/ListaFilter";
import "./buscador.css";

function App() {
  const [palabra, setPalabra] = useState("");

  return (
    <div className="app">
      <span>Buscar: </span>
      <input
        type="text"
        value={palabra}
        onChange={(e) => setPalabra(e.target.value)}
      />
      <ListaFilter palabra={palabra} />
    </div>
  );
}

export default App;
