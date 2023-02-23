import * as React from 'react'
import { BiFilterAlt } from 'react-icons/bi'

function Filter(): JSX.Element {
  return (
    <div className="px-2 md:px-12 mb-4 md:mb-6">
      <section className="flex flex-row justify-between items-center pt-20 border-b-2">
        <div className="flex flex-row max-w-fit items-center md:text-2xl text-xl font-sans font-semibold tracking-wider">
          <BiFilterAlt />
          <h2>Filter</h2>
        </div>
        <select className="outline-none min-w-[15%]">
          <option>Dinner</option>
          <option>Supper</option>
        </select>
      </section>
    </div>
  )
}

export default Filter
