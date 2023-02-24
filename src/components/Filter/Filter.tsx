import { useFetch } from 'hooks'
import * as React from 'react'
import { BiFilterAlt } from 'react-icons/bi'
import _ from 'lodash'

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

  const entries: string[] = []

  // get all the objects values and add them to entries array
  fetchedData?.meals.map((item) => {
    _.forIn(item, (content, key) => {
      if (key === props.valueKey) {
        entries.push(content)
      }
    })
    return null
  })

  // creating option element to be passed to the select element, by iterating entries.
  // Selected option is created based on the initial value
  const optionsArray = React.useMemo(() => {
    return entries?.map((item: string, index) =>
      item !== props.initial ? (
        <option key={`${item}${index}`} value={item}>
          {item}
        </option>
      ) : (
        <option key={`${item}${index}`} value={item} selected>
          {item}
        </option>
      )
    )
  }, [entries])

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
