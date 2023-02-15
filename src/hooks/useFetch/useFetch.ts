import { fetchData } from 'api'
import * as React from 'react'

function useFetch<T>(url: string): T | undefined {
  const [data, setData] = React.useState<T>()

  React.useEffect(() => {
    fetchData<T>(url)
      .then((response) => {
        setData(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [url])

  return data
}

export default useFetch
