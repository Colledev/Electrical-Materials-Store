import './App.css'
import Navbar from './components/Header/Navbar'
import Description from './components/Description/Description'
import Products from './components/Products/Products'
import DescripEnd from './components/DescripEnd/DescripEnd'
import Location from './components/Location/Location'
import Home from './components/Home/Home'
import Whatsapp from './components/Whatsapp/Whatsapp'
import Dev from './components/Dev/dev'

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Description></Description>
      <Products></Products>
      <Location></Location>
      <DescripEnd></DescripEnd>
      <Whatsapp></Whatsapp>
      <Dev></Dev>
    </div>
  )
}

export default App
