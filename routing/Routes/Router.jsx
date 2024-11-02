import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import LoginPage from '../Pages/LoginPage'
import SignUpPage from '../Pages/SignUpPage'
import HomePage from '../Pages/HomePage'

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <HomePage />
            },
            {
                path: "/login",
                element: <LoginPage />
            },
            {
                path: "/signup",
                element: <SignUpPage />
            }
        ]
    }
])

export default Router