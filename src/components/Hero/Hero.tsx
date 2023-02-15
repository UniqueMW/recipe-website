import * as React from 'react'
// import axios from 'axios'
import { useFetch } from 'hooks'
import type { RootObject } from 'hooks/useFetch/useFetch'

function Hero(): JSX.Element {
  const url = 'https://www.themealdb.com/api/json/v1/1/random.php'
  const [data, setData] = React.useState<RootObject>()

  // Perform data fetching operations in a hook.
  React.useEffect(() => {
    const fetchedData = useFetch(url)
    fetchedData
      .then((response) => {
        setData(response)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  console.log(data)
  if (typeof data !== 'undefined') {
    return <section>{data.meals[0].strMeal}</section>
  } else {
    return <h1>Loading....</h1>
  }
}

export default Hero
