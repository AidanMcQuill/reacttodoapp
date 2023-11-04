import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar} from 'react-bootstrap'

export default function Navigation() {
  return (
    <Navbar className='navClass'>
        <Navbar.Brand href='/'>React To Do App</Navbar.Brand>
        {/* Hamburger */}
        <Navbar.Toggle/>
        <Navbar.Collapse className='justify-content-end'>
            <Nav>
                <Link to='/todo' className='nav-link'>List</Link> 
                <Link to='/Categories' className='nav-link'>Categories</Link> 
                <Link to='/login' className='nav-link'>Login</Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
