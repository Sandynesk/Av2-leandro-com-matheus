import React from 'react';
import './Css/Footer.css';

function Footer() {
  return (
    <div className="Footer-conteiner">
        <footer className='footer'>
        <img  className="Logo-Sesi" src={require('../Fotos/SESI.png')} alt="Descrição da 
imagem" /> 

        <ul className='nav-list'>
            <p className='Footer-components'> © 2024 todos os direitos reservados ao povo do 3º/Informática para internet</p>
            
            <p className='contato'>Contato: osmelhores@sesisenai.com</p>
        </ul>
        
           

        </footer>
    </div>
  );
}

export default Footer;
