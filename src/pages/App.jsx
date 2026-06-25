// src/components/App.jsx
import { Link } from "react-router-dom";
const App = () => {
  return (
    <>
      <nav>
        <Link to="/">Início</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </nav>
      <h1>Página inicial</h1>
    </>
  );
};
export default App;