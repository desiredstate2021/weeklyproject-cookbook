import React, {useState, useEffect} from "react"
import './App.css';
import {Client} from './client'
import axios from 'axios'

const App = () => {

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    client.getEntries({
        content_type : 'weeklyProject'
    })
    .then(response => console.log(response))

  })

    return (
      <div className="App">



      </div>
    
  );
};

export default App;
