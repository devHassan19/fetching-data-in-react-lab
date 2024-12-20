import React from 'react'
import StarshipCard from './StarshipCard'
import '../App.css'
const StarshipList = ({ starships }) => {
  if (starships.length === 0) {
    return <div>No starships found</div>
  }

  return (
    <section>
      <ul>
        {starships.map((starship) => (
          <li>
            <StarshipCard key={starship._id} starship={starship} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default StarshipList
