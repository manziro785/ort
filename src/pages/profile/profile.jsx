import React from 'react'
import './profileModule.css'
import UserInfo from '../../components/profile/userInfo/userInfo.jsx'
import { NavLink } from 'react-router-dom'
import Awards from '../../components/profile/awards/awards.jsx'
import Active from '../../components/profile/active/active.jsx'

export function ProfilePage() {
  return (
    <>
     <div className="header">
        <NavLink to='/' className="logo">
            <img src="./src/assets/header/ОРТмастер (2).svg" alt="" className="logo-main" />
        </NavLink>
        <div className="navbar">
        <div className="custom-tooltip">
              <img src="./src/assets/header/icon (2).svg" alt="Mini Photo" className="mini-photo" id="person" />
                <div className="tooltiptext">
                 <NavLink to='registration'>
                  <button className="sign-up">
                    Зарегаться
                  </button>
                  </NavLink>
                  <NavLink to='login'>
                  <button className="log-in">
                    Войти
                  </button>
                  </NavLink>
                </div>
          </div>
        </div>
    </div>

<div className="main-wrapper-profile">
    <div className="left-wrapper-profile">
    <UserInfo/>
    <Awards/>
    {/* <img src="./src/assets/profile/Frame 43.svg" alt="" className='dostizh' /> */}
    </div>
    <div className="right-wrapper-profile">
<Active/> 
{/* <img src="./src/assets/profile/Frame 40.svg" alt="" className='dostizh1' /> */}


    </div>
    </div>
    </>
  )
}
