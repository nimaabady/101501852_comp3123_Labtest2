import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Weather from './components/Weather'
import './App.css'

function App() {
  const [city, setCity] = useState("Toronto");
  const [input, setInput] = useState("");

  function search(e) {
    e.preventDefault();
    //stops empty returns
    if (input.trim() === "") return;
    setCity(input);
  }
  return (
    <div>
      <div>
        <form onSubmit={search} style={{paddingBottom: "40px"}}>
          <input type="text" placeholder='Enter City' value={input} onChange={(e) => setInput(e.target.value)}/>
          <button type="submit">Search</button>
        </form>
      </div>
      <div style={{
          backgroundColor: "#ffffffff",
          padding: "20px",
          borderRadius: "30px",
          border: "5px solid #000000",
        }}>
        <Weather city = {city}/>    
      </div>  
    </div> 
  )
}

export default App
