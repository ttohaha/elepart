import React from 'react'
import HeaderNav from '../HeaderNav/HeaderNav'
import Messengers from '../../Messengers/Messengers'
import './Menu.css'

function Menu() {
  return (
    <div>
        <HeaderNav mobileClass='header-nav-mobile'/>
        <div className='header-top-contacts header-top-contacts-mobile'>
            <Messengers/>
            <a href="tel:+375445764500">+375 44 576 45 00 </a>
            <div className='header-top-contacts-button'>Связаться с нами</div>
        </div>
    </div>
  )
}

export default Menu