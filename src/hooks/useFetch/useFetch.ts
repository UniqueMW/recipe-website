import axios from 'axios'
import type { AxiosError } from 'axios'
import * as React from 'react'

function useFetch<T>(url: string): T | undefined {
  const [data, setData] = React.useState<T>()
  React.useEffect(() => {
    axios<T>(url)
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        const err = error as AxiosError
        setData(error)
        console.log(err.message)
        throw new Error(err.message)
      })
  }, [url])
  return data
}

export default useFetch
