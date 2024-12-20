import { useState } from 'react'

const StarShipsSearch = ({ fetchData }) => {
  const [ship, setShip] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchData(ship)
    setShip('')
  }

  return (
    <section>
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
    </section>
  )
}

export default StarShipsSearch
