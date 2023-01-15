import axios from 'axios'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import * as serviceWorker from './serviceWorker'

const root = createRoot(document.getElementById('root')!) // createRoot(container!) if you use TypeScript
axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common.Authorization = `Bearer  `;
axios.defaults.headers.post['Content-Type'] = 'application/json';
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
