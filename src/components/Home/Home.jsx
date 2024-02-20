import React from 'react'
import './Home.css'

const Home = () => {
    return (
    <div id='inicio'>
        <div className='Intro'>
            <div className='iconn'>
            </div>
            <div className='I-container'>
                <h1>A melhor distribuidora de materiais elétricos da região</h1>
                <h2>Conheça a Eletrocolle e encontre uma ampla variedade de produtos para atender às suas necessidades.</h2>
                <div className='Orç'><a href='https://wa.me/998422269?text=Gostaria de fazer um pedido!' target='_blank' >Faça um orçamento agora</a></div>
            </div>
            <div>
                <img src='./EletroColleFrontal.jpg' alt='logo'></img>
            </div>
        </div>
        <div className="dotted-block"></div>
        <div className="color-block"></div>
    </div>
    )
}

export default Home
