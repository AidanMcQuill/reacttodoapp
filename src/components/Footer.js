import React from 'react'
import Logout from './Auth/Logout'
import { useAuth } from '../contexts/AuthContext'

export default function Footer() {
    //destruct
    const { currentUser } = useAuth()

    //UI
    return (
        <>
            {currentUser && <Logout />}
            {/* ^ If the user is logged in offer the logout */}

            <footer className='text-center text-white bg-info p-4'>
                {/* Charcter Entity Refrences: &copy; */}
                <strong>&copy; {new Date().getFullYear()} Centriq Training, All Rights Reserved</strong>
            </footer>
        </>
    )
}
