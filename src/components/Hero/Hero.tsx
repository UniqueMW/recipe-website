import * as React from 'react'
import { useFetch } from 'hooks'
import type { Meals } from 'types'
import * as _ from 'lodash'
import { GoLocation } from 'react-icons/go'
import { BiCategory } from 'react-icons/bi'
import Tag from 'components/Tag/Tag'
import HeroPlaceholder from './HeroPlaceholder'
import { Link } from 'react-router-dom'

function Hero(): JSX.Element {
  const url = 'https://www.themealdb.com/api/json/v1/1/random.php'

  // TODO add a test.
  // TODO add a skeleton loading component
  // TODO error boundary for the component and the hero image.
  // TODO think of adding scroll trigger animations.
  const fetchedData = useFetch<Meals>(url)?.meals[0]

  // shortening random meal instruction to 300 words.
  let shortInstruction = null
  if (typeof fetchedData !== 'undefined')
    shortInstruction = _.truncate(fetchedData.strInstructions, {
      length: 300,
      omission: '.....'
    })

  // render hero component if nothing is wrong.
  if (typeof fetchedData !== 'undefined') {
    return (
      <Link to={`/details:${fetchedData.idMeal}`}>
        <section className="flex lg:flex-row flex-col-reverse md:px-12 px-2 text-lg font-sans justify-center lg:max-h-[90vh]">
          <section className=" flex flex-col min-w-[40vw] border font-medium px-4 py-10 md:space-y-14 space-y-8 items-center bg-primary">
            <h1 className="font-bold text-center md:text-2xl text-lg border-b-2 max-w-fit">
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

            <p className="text-base md:text-xl font-normal tracking-wide font-sans text-justify ">
              {shortInstruction}
            </p>
          </section>
          <img src={fetchedData.strMealThumb} alt={fetchedData.strMeal} />
        </section>
      </Link>
    )
  }
  // render this component when loading.
  else {
    return <HeroPlaceholder />
  }
}

export default Hero
