import React, {useState} from 'react';
import menu from '../img/menu.svg';
import logo from '../img/shopping-bag.svg';
import cart from '../img/cart.svg';



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
                <img src={menu} alt='menu'/>
                <p>MENÚ</p>
            </div>

            <div className ='logo'>
            <img src={logo} alt='my shop home'/>
            <p>MYSHOP</p>
            </div>

            <div className='cart'>
            <img src={cart} alt='carrito de compras'/>
            <p>CARRITO</p>


            </div>
            
        </header>

        {menuShow && <Menu />}
        </>

    )
}
