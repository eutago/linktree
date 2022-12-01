import React from 'react';
import ThiagoIMG from './assets/images/thiago.jpg';

const Header = () => {
  return (
    <header className="Header">
      <img className="thiago" src={ThiagoIMG} alt="Foto de Thiago" />
      <div>
        <h1>Thiago Luiz</h1>
        <p>
          Desenvolvedor <br /> Front-end
        </p>
      </div>
    </header>
  );
};

export default Header;
