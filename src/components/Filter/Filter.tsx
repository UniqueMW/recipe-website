import * as React from 'react'
import { IoFilterSharp } from 'react-icons/io5'
import _ from 'lodash'
import { useFetch } from 'hooks'

import type { CategoryObject, LocationObject, IngredientObject } from 'types'

// TODO make filter more good looking.
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

    setEntries(filterArray)
  }, [fetchedData])

  // creating option element to be passed to the select element, by iterating entries.
  // Selected option is created based on the initial value
  const optionsArray = React.useMemo(() => {
    return entries?.map((item: string, index) => (
      <option key={`${item}${index}`} value={item}>
        {item}
      </option>
    ))
  }, [entries])

  const handleSelect = (event: React.FormEvent<HTMLSelectElement>): void => {
    props.setOptionEntry(event.currentTarget.value)
  }

  // return the filter component if fetchedData is defined
  if (typeof optionsArray !== 'undefined') {
    return (
      <div className="px-2 md:px-12 mb-4 md:mb-6">
        <form className="flex flex-row justify-between items-center pt-20">
          <div className="flex flex-row max-w-fit items-center md:text-2xl text-xl font-sans font-semibold tracking-wider space-x-2">
            <h2>Catalog</h2>
            <IoFilterSharp />
          </div>

          <select
            className="outline-none min-w-[15%] border-2 border-gray-500 p-2"
            onChange={handleSelect}
            defaultValue={props.initial}
          >
            {optionsArray}
          </select>
        </form>
      </div>
    )
  }

  // return this if fetchedData is not available.
  return <h1>Loading.....</h1>
}

export default Filter
