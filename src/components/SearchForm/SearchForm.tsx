import { useFetch } from 'hooks'
import * as React from 'react'
import { FaSearch } from 'react-icons/fa'
import type { CardMeals } from 'types'

interface ISearchFormProps {
  setFetchedData: (fetchedData: CardMeals) => void
}

function SearchForm(props: ISearchFormProps): JSX.Element {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [url, setUrl] = React.useState<string>()

  const fetchedData = useFetch<CardMeals>(url)

  React.useEffect(() => {
    if (typeof fetchedData !== 'undefined') {
      props.setFetchedData(fetchedData)
    }
  }, [fetchedData])

  const handleSearch = (event: React.FormEvent): void => {
    event.preventDefault()
    if (inputRef.current !== null) {
      setUrl(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputRef.current.value}`
      )
    }
  }

  return (
    <form
      className="flex flex-row py-4 px-3 border shadow-md md:space-x-3 space-x-1 justify-between font-sans md:text-lg text-base min-w-[45%]"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder="try typing a meal"
        className="outline-none border min-w-[90%] min-h-full px-2"
        ref={inputRef}
      />
      <button type="submit" className="p-2">
        <FaSearch />
      </button>
    </form>
  )
}

export default SearchForm
