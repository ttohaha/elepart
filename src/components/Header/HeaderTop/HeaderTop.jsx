import img_logo from '../../../img/logo.png'
import Messengers from '../../Messengers/Messengers'


function HeaderTop({isOpen, toggleMenu}) {

  return (
    <div className='header-top'>
      <img src={img_logo} alt="logo"/>

      <div className='header-top-contacts'>
        <Messengers/>
        <a href="tel:+375445764500">+375 44 576 45 00 </a>
        <div className='header-top-contacts-button'>Связаться с нами</div>
      </div>
      <button
        className={`header-top-hamburger-menu ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <span className="header-top-line header-top-line-top"></span>
        <span className="header-top-line header-top-line-middle"></span>
        <span className="header-top-line header-top-line-bottom"></span>
      </button>
    </div>
  )
}

export default HeaderTop