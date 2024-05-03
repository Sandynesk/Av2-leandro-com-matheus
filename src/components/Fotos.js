import React from 'react';
import './Css/Fotos.css';

function Fotos() {
  return (
        <div className='Fotos-Conteiner'>

            <div className='texto-fotos'>
                <h1>Bem-vindo á Página incial da nossa AV2</h1>
                <p>Conheça os melhores Cosplays do Sesi/Senai ❤😍</p>
            </div>

            <div className='fotos-grupo'>
            <div>
            <img className='Fotos' src={require('../Fotos/FOTO2.jpg')} alt="Descrição da 
            imagem" /> 
            <h1 className='legenda'>Zé gotinha</h1> 
            </div>

            <div>
            <img className='Fotos' src={require('../Fotos/FOTO3.jpg')} alt="Descrição da 
            imagem" /> 
            <h1 className='legenda'>Povo da turma da monica</h1> 
            </div>

            <div>
            <img className=
            'Fotos' src={require('../Fotos/FOTO4.jpg')} alt="Descrição da 
            imagem" />
            <h1 className='legenda'>as menina tu é doido</h1> 
            </div>

            <div>
            <img className='Fotos' src={require('../Fotos/FOTO5.jpg')} alt="Descrição da 
            imagem" /> 
            <h1 className='legenda'>The tigrinho apenas</h1> 
            </div>

            <div>
            <img className='Fotos' src={require('../Fotos/FOTO6.jpg')} alt="Descrição da 
            imagem" /> 
            <h1 className='legenda'>isabele e simplesmente leadro ??</h1> 
            </div>

            <div>
            <img className='Fotos' src={require('../Fotos/FOTO7.jpg')} alt="Descrição da 
            imagem" /> 
            <h1 className='legenda'>Os cara da tim e da claro mano wtf</h1> 
            </div>
                
            </div>

        </div>
  );
}

export default Fotos;
