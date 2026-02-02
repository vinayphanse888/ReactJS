import React from 'react'
import Card from './components/Card.jsx'

const App = () => {
  return (
    <div className='parent'>
      <Card
        user='Panda'
        habitat='Forest'
        img='https://images.unsplash.com/photo-1564349683136-77e08dba1ef7'
      />

      <Card
        user='Turtle'
        habitat='Ocean'
        img='https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f'
      />

      <Card
        user='Polar Bear'
        habitat='Arctic'
        img='https://images.unsplash.com/photo-1589656966895-2f33e7653819'
      />

      <Card
        user='Fox'
        habitat='Forest'
        img='https://images.unsplash.com/photo-1474511320723-9a56873867b5'
      />

      <Card
        user='Leopard'
        habitat='Forest'
        img='https://images.unsplash.com/photo-1456926631375-92c8ce872def'
      />
    </div>
  )
}

export default App
