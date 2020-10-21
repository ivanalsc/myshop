import React, {useState} from 'react';

export const Header = () => {
    const [menuShow, setMenuShow] = useState(false)


    const Menu = () => {
        return(
        <div className='open-menu'>
        <ul>
            <li>Sobre Nosotros</li>
            <li>Preguntas frecuentes</li>
            <li>Contacto</li>
        </ul>

    </div>
        )

    }
               

    return (
        <>
        <header>
            <div className ='menu' onClick={()=> setMenuShow(!menuShow)}>
                <img src='../img/menu.svg' alt='menu'/>
                <p>MENÚ</p>
            </div>

            <div className ='logo'>
            <img src='../img/shopping-bag.svg' alt='menu'/>
            <p>MYSHOP</p>
            </div>

            <div className='cart'>
            <img src='../img/cart.svg' alt='menu'/>
            <p>CARRITO</p>


            </div>
            
        </header>

        {menuShow && <Menu />}
        </>

    )
}
