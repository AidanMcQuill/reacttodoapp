import React from 'react'
import { Container, Card } from 'react-bootstrap'
//use-navigate is used to naviagte a user 
import { useNavigate } from 'react-router-dom'
//useAuth allows us access to currentUser, Login, or Logout.
//We must destructure these values from useAuth in the hook inside the component
import {useAuth} from '../../contexts/AuthContext'

//LOGIC
export default function Login() {
    //deconstructing
    const { login } = useAuth()
    const navigate = useNavigate()

    async function handleAuth() {
        await login()
        //once we login we are gonna return the user back home. 
        return navigate('/')
    }

    //UI
  return (
     <div className='login'>
        <article className="bg-info mb-5 p-5 text-dark">
            <h1 className='text-center'>Welcome to ResourePlus!</h1>
        </article>
        <Container>
            <Card className="m-2 border-dark text-center">
                <Card.Header className="bg-dark text-white">
                    <h2>Login for full functionality</h2>
                </Card.Header>
                <Card.Body>
                    {/* When the user clicks our button we want the user to fire off the handleAuth and trigger the callback */}
                    <button className="btn btn-success" onClick={() => handleAuth()}>
                        Login w/ Github
                    </button>
                </Card.Body>
            </Card>
        </Container>
    </div>
  )
}
