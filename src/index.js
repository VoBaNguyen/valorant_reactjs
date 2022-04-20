import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/fonts/Anton/Anton-Regular.ttf'
import '../node_modules/slick-carousel/slick/slick.css'
import '../node_modules/slick-carousel/slick/slick-theme.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
