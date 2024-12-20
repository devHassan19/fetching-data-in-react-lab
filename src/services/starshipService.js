const BASE_URL = 'https://swapi.py4e.com/api/starships'

const search = async (name) => {
  try {
    const URL = `${BASE_URL}`
    const response = await fetch(URL)
    const data = await response.json()

    const starship = data.results.find(
      (starship) => starship.name.toLowerCase() === name.toLowerCase()
    )

    return starship || null
  } catch (err) {
    console.error(err)
  }
}

export { search }
