import axios from 'axios'

async function fetchData<T>(url: string): Promise<T> {
  const fetchedData = await axios(url)

  return fetchedData.data
}

export default fetchData
