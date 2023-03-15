import axios from 'axios'
import type { AxiosError } from 'axios'
import * as React from 'react'

function useFetch<T>(url: string | undefined): T | undefined {
  const [data, setData] = React.useState<T>()
  const getData = async (): Promise<void> => {
    try {
      if (typeof url !== 'undefined') {
        const fetchedData = await axios(url)
        setData(fetchedData.data)
      }
    } catch (error) {
      const err = error as AxiosError
      console.log(err.message)
      throw new Error(err.message)
    }
  }
  React.useEffect(() => {
    // eslint-disable-next-line
    getData()
  }, [url])
  return data
}

export default useFetch
