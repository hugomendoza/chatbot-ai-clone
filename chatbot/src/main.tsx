import React from 'react'
import ReactDOM from 'react-dom/client'
// import ChatApp from './ChatApp.tsx'
import './index.css'
import ImageGenApp from './ImageGenApp.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <ChatApp /> */}
    <ImageGenApp />
  </React.StrictMode>,
)
