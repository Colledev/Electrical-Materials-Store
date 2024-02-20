import React from 'react'
import './Description.css'

const Description = () => {
    return (
        <section id='Quemsomos' className='page'>
            <div className='p-container'>
                <div className='p-left'>
                    <div className='imgContainer'>
                        <img src='./lamp2.jpg' alt='logo'></img>
                    </div>
                </div>
                <div className='p-right'>
                    <h1>QUEM SOMOS</h1>
                    <h2>Bem-vindo à EletroColle, sua parceira em soluções elétricas e de iluminação, atendendo Maringá e região. Somos especialistas no fornecimento de materiais elétricos de alta qualidade, incluindo iluminárias, cabos, painéis, tomadas, eletrodutos, lâmpadas, spots e muito mais.</h2>
                </div>
            </div>
        </section>
    )
}

export default Description
