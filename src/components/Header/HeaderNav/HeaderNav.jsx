import React from 'react'
import { Link } from 'react-router-dom'

function HeaderNav({mobileClass = 'sdsd'}) {
  return (
    <nav className={`header-nav ${mobileClass}`}>
      <ul>
        <li className='header-nav-li-after'>
          <Link to='/'>Услуги</Link>
          <ul className='header-nav-menu'>
            <li><Link to='/'>Разработка и копирование печатных плат и электронных устройств</Link></li>
            <li><Link to='/'>Ремонт оптических и цифровых прицелов</Link></li>
            <li><Link to='/'>Ремонт тепловизоров</Link></li>
            <li><Link to='/'>Ремонт ночных прицелов и приборов наблюдения</Link></li>
            <li><Link to='/'>Ремонт раций и радиостанций</Link></li>
            <li><Link to='/'>Ремонт тактических наушников</Link></li>
            <li><Link to='/'>Ремонт IP видеокамер</Link></li>
            <li><Link to='/'>Ремонт навигаторов Garmin</Link></li>
          </ul>
        </li>
        <li><Link to='/'>Блог</Link></li>
        <li><Link to='/'>Контакты</Link></li>
      </ul>
    </nav>
  )
}

export default HeaderNav