import * as React from 'react'
import { useFetch } from 'hooks'
import * as _ from 'lodash'
import { GoLocation } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { BiCategory } from 'react-icons/bi'
import { Loading, Tag } from 'components'
import { handleBrokenImage } from 'utils'

import type { Meals } from 'types'

function Hero(): JSX.Element {
  const url = 'https://www.themealdb.com/api/json/v1/1/random.php'

  const fetchedData = useFetch<Meals>(url)?.meals[0]

  // shortening random meal instruction to 300 words.
  let shortInstruction = null
  if (typeof fetchedData?.idMeal !== 'undefined')
    shortInstruction = _.truncate(fetchedData.strInstructions, {
      length: 300,
      omission: '.....'
    })

  // render hero component if nothing is wrong.
  if (typeof fetchedData !== 'undefined') {
    return (
      <Link to={`meal/:${fetchedData.idMeal}`}>
        <section className="flex xl:flex-row flex-col-reverse md:px-12 px-2 text-lg font-sans justify-center lg:max-h-[90%] mt-16">
          <section className=" flex flex-col border xl:border-r-0 md:border-t-2 border-t-0 border-gray-500 min-w-[40vw] font-medium px-4 py-10 md:space-y-14 space-y-8 items-center bg-primary">
            <h1 className="font-bold text-center md:text-6xl text-3xl tracking-wider border-b-2 border-gray-500 max-w-fit md:mt-16">
              {fetchedData.strMeal}
            </h1>

            <section className="flex flex-row justify-evenly md:space-x-4 space-x-2">
              <Tag content={fetchedData.strArea}>
                <GoLocation className="mt-1" />
              </Tag>
              <Tag content={fetchedData.strCategory}>
                <BiCategory className="mt-1" />
              </Tag>
            </section>

            <p className="text-base md:text-lg font-normal tracking-wide font-sans text-justify ">
              {shortInstruction}
            </p>
          </section>
          <img
            src={fetchedData.strMealThumb}
            onError={handleBrokenImage}
            alt={fetchedData.strMeal}
            className="border border-gray-500 lg:border-l-0 lg:border-b border-b-0 max-w-[50]"
            title={fetchedData.strMeal}
          />
        </section>
      </Link>
    )
  }
  // render this component when loading.
  return <Loading />
}

export default Hero
