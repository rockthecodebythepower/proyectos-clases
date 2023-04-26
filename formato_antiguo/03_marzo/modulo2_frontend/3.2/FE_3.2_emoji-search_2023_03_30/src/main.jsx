import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Theme from './styles/Theme'
import GlobalStyle from './styles/Global'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme>
      <GlobalStyle />
      <App />
    </Theme>
  </React.StrictMode>
)
