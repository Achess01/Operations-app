import "./App.css";
// React
import { useState } from "react";

// Components
import Operation from "./components/Operation/Operation";
import Init from "./components/Init/Init";

function App() {
  const [username, setUsername] = useState("");
  const [operation, setOperation] = useState("");
  const [logged, setLogged] = useState(false);

  function handleViews() {
    if (!logged) {
      return (
        <Init
          setUsername={setUsername}
          setOperation={setOperation}
          setLogged={setLogged}
        />
      );
    }
    return (
      <Operation
        setLogged={setLogged}
        operation={operation}
        username={username}
      />
    );
  }

  return handleViews();
}

export default App;
