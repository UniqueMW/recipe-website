import { useFetch } from 'hooks'
import * as React from 'react'
import { BiFilterAlt } from 'react-icons/bi'

import type { CategoryObject, LocationObject, IngredientObject } from 'types'
interface IFilterProps {
  url: string
  setOptionEntry: (entry: string) => void
  initial: string
}
type GridInfoObjects = CategoryObject & LocationObject & IngredientObject

function Filter(props: IFilterProps): JSX.Element {
  // fetch filter options value based on passed url
  const fetchedData = useFetch<GridInfoObjects>(props.url)

  // creating option element to be passed to the select element, by iterating fetchedData.
  // Selected option is created based on the initial value
  console.log(fetchedData)
  const optionsArray = React.useMemo(() => {
    return fetchedData?.meals.map((item, index) =>
      item.strCategory !== props.initial ? (
        <option key={`${item.strCategory}${index}`} value={item.strCategory}>
          {item.strCategory}
        </option>
      ) : (
        <option
          key={`${item.strCategory}${index}`}
          value={item.strCategory}
          selected
        >
          {item.strCategory}
        </option>
      )
    )
  }, [fetchedData])

  const handleSelect = (event: React.FormEvent<HTMLSelectElement>): void => {
    props.setOptionEntry(event.currentTarget.value)
  }

  // return the filter component if fetchedData is defined
  if (typeof optionsArray !== 'undefined') {
    return (
      <div className="px-2 md:px-12 mb-4 md:mb-6">
        <section className="flex flex-row justify-between items-center pt-20 border-b-2 border-gray-500">
          <div className="flex flex-row max-w-fit items-center md:text-2xl text-xl font-sans font-semibold tracking-wider">
            <BiFilterAlt />
            <h2>Filter</h2>
          </div>

          <select className="outline-none min-w-[15%]" onChange={handleSelect}>
            {optionsArray}
          </select>
        </section>
      </div>
    )
  }

  // return this if fetchedData is not available.
  return <h1>Loading.....</h1>
}

export default Filter
