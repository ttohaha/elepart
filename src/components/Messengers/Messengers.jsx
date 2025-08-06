import React from 'react'
import img_talegram from '../../img/tg_logo.png'
import img_viber from '../../img/viber_logo.png'
import img_male from '../../img/male_logo.png'
import './Messengers.css'

function Messengers() {
  return (
    <div className='messengers'>
      <a href="viber://chat?number=+375445764500" target='blank'>
        <img src={img_viber} alt="viber_logo" />
      </a>
      <a href="https://t.me/elepart" target='blank'>
        <img src={img_talegram} alt="tg_logo" />
      </a>
      <a href="mailto:manager@elepart.by" target='blank'>
        <img src={img_male} alt="male_logo" />
      </a>
    </div>
  )
}

export default Messengers