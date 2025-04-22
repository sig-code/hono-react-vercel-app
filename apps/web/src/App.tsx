import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => setMessage('Error: ' + err.message))
  }, [])

  return (
    <div className="App">
      <h1>Vite + React + Hono</h1>
      <div className="card">
        <p>API Message: {message}</p>
      </div>
    </div>
  )
}

export default App
