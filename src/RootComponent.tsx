import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import { ROUTES } from './resources/routes-constants'
import SignIn from './pages/auth/signIn'
import Signup from './pages/auth/signup'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/main.sass'
import Browse from './pages/browse'

const RootComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} />
                <Route path={ROUTES.AUTH_ROUTE} element={<SignIn />} />
                <Route path="/browse" element={<Browse />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    )
}

export default RootComponent
