// src/pages/Sobre.jsx
import Perfil from "../components/Perfil";
import Footer from "../components/Footer";
import ConteudoSobre from "../components/ConteudoSobre";
const Sobre = () => {
    return (
        <div className="container">
            <div className="row">
                <Perfil col={4} />
                <ConteudoSobre col={8} />
            </div>
            <Footer />
        </div>
    );
};
export default Sobre;