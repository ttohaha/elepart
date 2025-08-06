import React from 'react'
import './Motto.css'

function Motto() {
  return (
    <div className='motto'>
        <p>Берёмся за любые нестандартные задачи <br /> <span>и находим решения под ключ</span></p>
        <div>
            <p><span className='motto-span'>Ремонтируем</span> прицелы, тепловизоры и приборы ночного видения.</p>
            <p><span className='motto-span'>Настраиваем</span> радиостанции и активные наушники.</p>
            <p><span className='motto-span'>Разрабатываем</span> электронные устройства и выполняем реверс-инжиниринг плат.</p>
        </div>
        <button className='header-top-contacts-button motto-button'>Получить БЕСПЛАТНУЮ консультацию</button>
    </div>
  )
}

export default Motto