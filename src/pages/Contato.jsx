// src/pages/Contato.jsx
import Perfil from "../components/Perfil";
import Footer from "../components/Footer";
import ConteudoContato from "../components/ConteudoContato";
const Contato = () => {
    return (
        <div className="container">
            <div className="row">
                <Perfil col={4} />
                <ConteudoContato col={8} />
            </div>
            <Footer />
        </div>
    );
};
export default Contato;
