import { useState, useEffect } from 'react'
import * as starshipService from './services/starshipService'
import StarshipSearch from './components/StarshipSearch'
// import StarshipList from './components/StarshipList'
import StarshipCard from './components/StarshipCard'
import './App.css'
const App = () => {
  const [starShips, setStarShips] = useState({})

  const fetchData = async (ship) => {
    const data = await starshipService.search(ship)
    const newStarshipSearch = {
      name: data.name,
      Class: data.class,
      Manufacturer: data.manufacturer,
      model: data.model
    }
    setStarShips(newStarshipSearch)
  }

  useEffect(() => {
    fetchData('')
    console.log('useEffect log')
  }, [])

  return (
    <main>
      <h1>Star Wars API</h1>
      <StarshipSearch fetchData={fetchData} />
      <StarshipCard starShips={starShips} />
    </main>
  )
}

export default App
