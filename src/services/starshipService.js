const BASE_URL = 'https://swapi.py4e.com/api/starships'

const search = async () => {
  try {
    const URL = `${BASE_URL}`
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)

    return data
  } catch (err) {
    console.log(err)
  }
}
search('CR90 corvette')
export { search }
