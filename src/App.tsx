import React, { useEffect, useState } from "react"
// import logo from './logo.svg';
import './App.css';
import SelectBox from './SelectBox';


function App() {
  const [filter, setFilter] = useState({jobs: [{company: ""}]})
  const [isLoaded, setLoaded] = useState(false)

  const fetchData = () => {
    fetch("/data/amazon-filter.json")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setFilter(data)
        setLoaded(true)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <h1>My App</h1>
      {isLoaded && filter.jobs.map(item=> (<li>{item.company}</li>))}
      <SelectBox />
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
