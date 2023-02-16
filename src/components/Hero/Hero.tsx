import * as React from 'react'
import { useFetch } from 'hooks'
import type { Meals } from 'types'
import * as _ from 'lodash'
import { GoLocation } from 'react-icons/go'
import { BiCategory } from 'react-icons/bi'

function Hero(): JSX.Element {
  const url = 'https://www.themealdb.com/api/json/v1/1/random.php'

  // get random data from the api using useFetch hook
  const fetchedData = useFetch<Meals>(url)?.meals[0]

  if (typeof fetchedData !== 'undefined') {
    return (
      <section className="flex lg:flex-row flex-col-reverse md:px-12 px-2 text-lg font-sans justify-center lg:max-h-[90vh]">
        <section className=" flex flex-col min-w-[40vw] font-medium px-4 py-10 shadow-sm space-y-14 items-center">
          <h1 className="font-bold text-center text-2xl border-b-2 max-w-fit">
            {fetchedData.strMeal}
          </h1>
          <p className="text-md">
            {_.truncate(fetchedData.strInstructions, {
              length: 300,
              omission: '...'
            })}
          </p>
          <section className="flex flex-row justify-evenly space-x-4">
            <div className=" bg-[rgba(110,190,243,0.7)] p-2 flex flex-row space-x-2 rounded-sm">
              <GoLocation className="mt-1" />
              <h2>{fetchedData.strArea}</h2>
            </div>
            <div className="bg-[rgba(110,190,243,0.7)] p-2 flex flex-row space-x-2 rounded-sm">
              <BiCategory className="mt-1" />
              <h2>{fetchedData.strCategory}</h2>
            </div>
          </section>
        </section>
        <img src={fetchedData.strMealThumb} alt={fetchedData.strMeal} />
      </section>
    )
  } else {
    return <h1>Loading....</h1>
  }
}

export default Hero
