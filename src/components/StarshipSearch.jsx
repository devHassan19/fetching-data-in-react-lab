import { useState } from 'react'
import '../App.css'
const StarshipSearch = ({ fetchData }) => {
  const [ship, setShip] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchData(ship)
    setShip('')
  }

  return (
    <main>
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="ship">Search Term:</label>
        <input
          id="ship"
          type="text"
          value={ship}
          onChange={(e) => setShip(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </main>
  )
}

export default StarshipSearch
