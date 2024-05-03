import React from 'react';
import './Css/Nav.css';


function Nav() {
  return (
    <div className="Nav-conteiner">
      <nav className="Nav">

      <img  className="Logo" src={require('../Fotos/SENAI.png')} alt="Descrição da 
imagem" /> 

        <ul className='nav-list'>
            <a href='/' className='nav-components'>Home</a>
            <a href='/contato' className='nav-components'>Contato</a>
            <a href='/contato' className='nav-components'>Quem Somos</a>        
        </ul>





      </nav>
    </div>
  );
}

export default Nav;
