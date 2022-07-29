import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

const App = () => {

  const [msg, setMsg] = useState('')

  const handleClick = async () => {
    const data = await window.fetch('/api')
    const json = await data.json()
    const msg = json.msg

    setMsg(msg)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>POC <br /> Node/express &#x2794; React</p>
        <button onClick={handleClick}>Message de l'api</button>
        <p>{msg}</p>
      </header>
    </div>
  );
}

export default App;
