import { useState } from "react";
import Logo from "../img/logo.png";
import "../styles/Header.css";

const Header = () => {
   const [search, setSearch] = useState("");
   const handleInput = (eve) => {
      setSearch(eve.target.value);
   };

   return (
      <header>
         <img className="Logo" src={Logo}></img>
         <input
            className="Searcher__Bar"
            value={search}
            onChange={handleInput}
         ></input>
         <button className="Searcher__Button">Go</button>
      </header>
   );
};

export { Header };
