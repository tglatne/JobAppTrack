import React from 'react'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Link } from 'react-router-dom'

import { Logo } from '../components'

const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <Logo />
        </nav>
        <div className='container page'>
            <div className="info">
                <h1>Job <span>Application</span>Tracker
                </h1>
                <Link to="/register" className='btn btn-hero'>
                    Login 
                </Link>
            </div>
        </div>

    </Wrapper>
  )
}

export default Landing

