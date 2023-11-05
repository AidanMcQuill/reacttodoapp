import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'

export default function Navigation() {
    //deconstuct
    const {currentUser} = useAuth()
    return (
    <Navbar className='navClass'>
        <Navbar.Brand href='/'>React To Do App</Navbar.Brand>
        {/* Hamburger */}
        <Navbar.Toggle/>
        <Navbar.Collapse className='justify-content-end'>
            <Nav>
              {/* inside the nav we will hold tags for log-in functionality */}

              {/* If the user IS logged in */}
              {currentUser &&
              <>   {/* anony tag */}
                <Link to='/todo' className='nav-link'>To-Do</Link> 
                <Link to='/Categories' className='nav-link'>Categories</Link>
              </>
              }
                <Link to='/Welcome' className='nav-link'>Welcome</Link>

                {/* If user is NOT logged in  */}
              {!currentUser &&
                <Link to='/login' className='nav-link'>Login</Link>
              }
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
