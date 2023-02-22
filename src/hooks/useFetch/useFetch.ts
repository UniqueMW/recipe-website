import axios from 'axios'
import * as React from 'react'

function useFetch<T>(url: string): T | undefined {
  const [data, setData] = React.useState<T>()
  React.useEffect(() => {
    axios<T>(url)
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        setData(error)
        throw new Error(error)
      })
  }, [url])
  return data
}

export default useFetch
