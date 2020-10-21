import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Modal } from './components/Modal';
import { Product } from './components/Product';



function Shop({products}) {


  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(true)

  }
  const closeModal = ()=>{
    setModal(false)
  }
  
  

  return (
    <div className="App">
      <Header />
      {modal && <Modal closeModal={closeModal} />}
      <main>
        {
          products.map(p => (
            <Product prenda={p.prenda} precio={p.precio} descripcion={p.descripcion} pictures={p.imagenes} key={p.prenda} handleModal={handleModal} />
          ))

        }
        
      </main>
    </div>
  );
}

export default Shop;
