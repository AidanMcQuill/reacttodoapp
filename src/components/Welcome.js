import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import HeroShot from '../assets/HeroShot.jpg'

export default function Welcome() {
    const { currentUser } = useAuth()
    return (
        <Container className='welcomeCon'>
            <h1 className='justify-content-center'>Welcome To My TO-DO app</h1>
            <div className='row'>
                <div className='welcomeText col-md-5'>
                    <p>
                     Welcome to my ToDo app! My name is Aidan McQuillan. This app is written in ReactJS and communicates with a database through SQL using an API. Several npm packages were implemented in this app for advanced functionality, including routing via React Router Dom, API request handling through Axios, authorization via Google Firebase, and form handling and schema validation using a combination of Formik and Yup. The full source code is available on GitHub.
                    </p>
                </div>
                <div className='WelcomeImg col-md-5'>
                    <img src={HeroShot} alt='Developer Portrait' photo />
                </div>
            </div>
        </Container>
    )
}
