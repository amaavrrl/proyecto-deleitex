import { useState } from 'react'

import MyNavbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
              <MyNavbar />
              <ItemListContainer saludo='saludo soy ItemListContainer' />

    </>
      
  )
}

export default App
