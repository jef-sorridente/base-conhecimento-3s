import "./artigo.css";
import { BsBook } from "react-icons/bs";
import iop from "../../img/OIP.jpg";

const Artigo = () => {
  return (
    <div className="artigo">
      <span className="artigo-info">
        <p>Artigo 0001 | 5min</p>
        <BsBook />
      </span>
      <h2>Base de Conhecimento</h2>

      <div className="artigo-name">
        <p>Por: Jeferson Soares | Assistente de Tecnologia</p>
        <p>Ultima atualização: 15/02/2024</p>
      </div>
      <div className="artigo-main">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
          ornare libero, a elementum turpis. Aenean ex lorem, tempus vel
          molestie et, congue at nisi. Praesent sit amet ornare eros, ut
          facilisis dolor. Phasellus rhoncus tincidunt augue eu porta. Aenean
          vitae pharetra tortor. Vivamus laoreet laoreet metus vel pharetra.
          Phasellus maximus orci purus, nec aliquam ex sagittis ac. Ut luctus
          pulvinar auctor. In hendrerit, mauris id varius placerat, urna risus
          vehicula orci, id tincidunt nisi ante at felis. Pellentesque lobortis
          imperdiet ante, ut cursus ex posuere nec. Nam mattis, sem id volutpat
          molestie, mi erat tincidunt leo, at pharetra justo urna convallis
          nunc. Aliquam sed tincidunt ex. Pellentesque eu mi elit.
        </p>
        <img src={iop} alt="Imagem exemplo" />
      </div>
    </div>
  );
};

export default Artigo;
