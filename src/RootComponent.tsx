import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ROUTES from './resources/routes-constants';
import SignIn from './components/auth/signIn';
import Signup from './components/auth/signup';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/main.sass';
import Browse from './pages/browse';
import WatchMovie from './pages/browse/watch/watch';

function RootComponent() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/watch/:id" element={<WatchMovie />} />
        <Route path="/auth/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default RootComponent;
