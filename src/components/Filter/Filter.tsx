import * as React from 'react'
import _ from 'lodash'
import { useFetch } from 'hooks'
import { Loading } from 'components'

import type { CategoryObject, LocationObject, IngredientObject } from 'types'
import { useLocation } from 'react-router-dom'

interface IFilterProps {
  url: string
  setOptionEntry: (entry: string) => void
  initial: string
  valueKey: 'strArea' | 'strCategory' | 'strIngredient'
}
type GridInfoObjects = CategoryObject & LocationObject & IngredientObject

function Filter(props: IFilterProps): JSX.Element {
  // fetch filter options value based on passed url
  const fetchedData = useFetch<GridInfoObjects>(props.url)
  const { pathname } = useLocation()

  const [entries, setEntries] = React.useState<string[]>()

  React.useEffect(() => {
    // get all the objects values and add them to entries array
    const filterArray: string[] = []

    fetchedData?.meals.map((item) => {
      _.forIn(item, (content, key) => {
        if (key === props.valueKey) {
          filterArray.push(content)
        }
      })
      return null
    })

    if (filterArray.length > 0) {
      setEntries(filterArray)
    }
  }, [fetchedData])

  // creating option element to be passed to the select element, by iterating entries.
  // Selected option is created based on the initial value
  const optionsArray = React.useMemo(() => {
    return entries?.map((item: string, index) => (
      <option key={`${item}${index}`} value={item} className="max-w-fit">
        {item}
      </option>
    ))
  }, [entries])

  const handleSelect = (event: React.FormEvent<HTMLSelectElement>): void => {
    props.setOptionEntry(event.currentTarget.value)
  }

  // return the filter component if fetchedData is defined
  if (
    typeof optionsArray !== 'undefined' &&
    typeof fetchedData !== 'undefined'
  ) {
    return (
      <section className="px-2 md:px-12 mb-4 md:mb-6 pt-20">
        <form
          className="flex flex-row justify-between items-center border border-gray-500 p-1"
          role="form"
        >
          <div className="flex flex-row max-w-fit items-center md:text-xl text-lg font-sans font-medium tracking-wider space-x-2">
            <h2>{pathname}</h2>
          </div>

          <select
            className="outline-none max-w-fit border border-gray-400 bg-transparent p-2"
            role="listbox"
            onChange={handleSelect}
            defaultValue={props.initial}
          >
            {optionsArray}
          </select>
        </form>
      </section>
    )
  }

  // return this if fetchedData is not available.
  return <Loading />
}

export default Filter
