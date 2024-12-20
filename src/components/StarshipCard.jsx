const StarshipCard = ({ starShips }) => {
  console.log('starshipCard props:', starShips)
  return (
    <section>
      {/* <h2>{shipCard.name}</h2> */}
      <p>Class: {starShips.class}</p>
      <p>Manufacturer: {starShips.manufacturer}</p>
      <p>Model: {starShips.model}</p>
    </section>
  )
}

export default StarshipCard
