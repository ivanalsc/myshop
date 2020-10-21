import React, { useState } from 'react'

export const Product = ({prenda, precio, descripcion, pictures, handleModal}) => {

    const [carousel, setCarousel] = useState(0)

    const moveLeft = () => {
        if(carousel < 1 ){
            setCarousel(carousel -1 )
        }
        if(carousel >= -(pictures.length)){
            setCarousel(pictures.length-1)
           
        }
        console.log(carousel)
       
    }


    const moveRight = () => {
        if(carousel <= pictures.length -1 ){
            setCarousel(carousel +1)
        }
        if(carousel > pictures.length -2 ){
            setCarousel(0)
           
        }
    }



 return (
        <article className= 'card'>


            <h3>{prenda}</h3>
                <div className="container">
                    <button className="left-btn" onClick={moveLeft}><i className="arrow"></i></button>
                    <img className="carousel" src={pictures[carousel]} alt={prenda} />
                    <button className="right-btn" onClick={moveRight}><i className="arrow"></i></button>
                </div>
                <div className="description">
                    <p>{descripcion}</p>
                    <p className="precio">{precio}</p>
                </div>
                <button className='button view'>Ver detalle</button>
                <button className='button add' onClick={handleModal}>Agregar al carrito</button>
            
            
        </article>
    )
}










