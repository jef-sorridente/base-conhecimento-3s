import "./navbar.css";
import logoBranco from "../../img/LogoBracno.png";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-top">
        <div className="navbar-margin">
          <img src={logoBranco} alt="" />
          <div className="search">
            <BsSearch />
            <p> Pesquisar</p>
          </div>
        </div>
      </div>

      <div className="navbar-mid">
        <div className="navbar-margin">
          <ul className="list-name">
            <li>Importação</li>
            <li>Exportação</li>
            <li>Outsourcing</li>
            <li>Financeiro</li>
            <li>Tecnologia</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
