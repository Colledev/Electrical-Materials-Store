import React from 'react'
import './Location.css'

const Location = () => {
  return (
    <div id='mapa' className='sec-location'>
      <div className='l-container'>
        <div className='Text-location'>
          <h1>Localização</h1>
          <h3><span>Endereço</span><br></br>Av. Arquiteto Nildo Ribeiro da Rocha, 5343 - Parque Industrial
 <br></br> Maringá - PR</h3>
          <h4><span>Horário</span><br></br>Segunda à Sexta: 8h às 18h <br></br> Sábado: 8h às 12h</h4>
        </div>
        <div className='gmap-location'>
          <iframe frameborder="0" scrolling="no" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Av.%20Arquiteto%20Nildo%20Ribeiro%20da%20Rocha,+(Eletro%20Colle)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population mapping</a></iframe>
        </div>
      </div>
    </div>
  )
}

export default Location