import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'

const Navbar = () => {
  return (
    <div>
      <header>
        <div className='container__header-icn-log-exit'>
          <ul className="nav nav-pills nav-justified align-items-center">
            <li className="nav-item menu-btn spacing">
              <Link className="nav-link" to='Menu'>
                <box-icon name='menu' color='#ff0000' ></box-icon>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/'>
                <div className='header__logo'></div>
              </Link>
            </li>
            <li className="nav-item spacing">
              <Link className="nav-link btn-off">
                <div className='btn-p'>
                  <box-icon name='power-off' color='#ff0000'></box-icon>
                </div>
                SALIR
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <nav className="nav nav-pills nav-fill container__header-info">
            <Link className="nav-link d-flex aling-items-center justify-content-center item" aria-current="page" to='Preparation'>
              <div className='header__box'>
                <box-icon type='solid' name='car-mechanic'></box-icon>
              </div>
              Preparación
            </Link>
            <Link className="nav-link d-flex item" to='Storage'>
              <div className='header__box'>
                <box-icon type='solid' name='car-garage'></box-icon>
              </div>
              Almacenamiento
            </Link>
            <Link className="nav-link d-flex item" to='ForSale'>
              <div className='header__box'>
                <box-icon name='purchase-tag'></box-icon>
              </div>
              En venta
            </Link>
            <Link className="nav-link d-flex item" to='Sold'>
              <div className='header__box'>
                <box-icon name='credit-card'></box-icon>
              </div>
              Vendidos
            </Link>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar