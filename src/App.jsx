import { useState, useEffect } from 'react'
import * as starshipService from './services/starshipService'
import StarshipSearch from './components/StarshipSearch'
import StarshipList from './components/StarshipList'
import './App.css'

const App = () => {
  const [starships, setStarships] = useState([])
  const [count, setCount] = useState(0)

  const addStarship = (newStarship) => {
    newStarship._id = Math.floor(Math.random() * 100000)
    setStarships((prevStarships) => [...prevStarships, newStarship])
  }

  const fetchData = async (ship) => {
    const data = await starshipService.search(ship)
    if (data) {
      const newStarship = {
        name: data.name,
        starship_class: data.starship_class,
        manufacturer: data.manufacturer,
        model: data.model
      }
      addStarship(newStarship)
      setCount(count + 1)
    } else {
      console.log('No starship found')
    }
  }

  useEffect(() => {
    fetchData('')
    console.log('useEffect log')
  }, [])

  return (
    <main>
      <h1>Star Wars API</h1>
      <StarshipSearch fetchData={fetchData} />
      <h2>Starship</h2>
      <h4>Number of result :{count}</h4>
      <StarshipList starships={starships} />
    </main>
  )
}

export default App
