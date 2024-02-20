import React from 'react'
import './DescripEnd.css'

const DescripEnd = () => {
    return (
        <div id='contato' className='header'>
            <div className='innerWidth D-container'>
                <div className='icon-end'>
                    <img src='./Iconereduzido.jpeg' alt='logo'></img>
                </div>
                <hr class='divider' />
                <div className='Dend-social'>
                    <a href='https://www.instagram.com/eletrocolle/' className='info-link'>
                        <div className="info-itemm">
                            <img src='./icons8-instagram-100.png' alt='logo1'></img>
                            <p>
                                Instagram
                            </p>
                        </div>
                    </a>
                    <a href='https://m.facebook.com/people/Eletro-Colle/100088532273125/' className='info-link'>
                        <div className="info-itemm">
                            <img src='./icons8-facebook-100.png' alt='logo1'></img>
                            <p>
                                Facebook
                            </p>
                        </div>
                    </a>
                </div>
                <hr class='divider' />
                <div className='Dend-data'>
                    <div className="info-item">
                        <img src='./icons8-telefone-48.png' alt='logo1'></img>
                        <p>
                            <span>(44)</span>
                            <strong style={{ whiteSpace: 'nowrap', marginLeft: '2px' }}>3031-9991</strong>
                        </p>
                    </div>
                    <div className="info-item">
                        <img src='./icons8-whatsapp-48.png' alt='logo1'></img>
                        <p>
                            <span>(44)</span>
                            <strong style={{ whiteSpace: 'nowrap', marginLeft: '2px' }}>99842-2269</strong>
                        </p>
                    </div>
                    <div className="info-item">
                        <img src='./icons8-nova-mensagem-48.png' alt='logo1'></img>
                        <p>
                            eletrocolle@hotmail.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DescripEnd