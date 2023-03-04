import * as React from 'react'
import { Grid, SearchForm } from 'components'
import cooking from 'assets/drawkit-daily-life-vector-illustration-05.svg'
import emptyPlate from 'assets/cutlery13.jpg'
import type { CardMeals } from 'types'

function Search(): JSX.Element {
  const [fetchedData, setFetchedData] = React.useState<CardMeals>()
  const searchResults = React.useMemo(() => {
    if (fetchedData?.meals === null) {
      return <img src={emptyPlate} className="max-w-lg" />
    } else if (typeof fetchedData === 'undefined') {
      return <img src={cooking} className="max-w-lg" />
    }
    return (
      <Grid
        fetchedData={fetchedData?.meals}
        gridContent="Search Results:"
        amount={fetchedData?.meals.length}
      />
    )
  }, [fetchedData])
  console.log(fetchedData)
  return (
    <section className="flex flex-col md:px-12 px-2 py-20 md:items-center md:space-y-14 space-y-10">
      <h1 className="md:text-4xl text-2xl text-center tracking-wider font-sans font-semibold">
        Find your next{' '}
        <b className="font-sans text-secondary">cooking recipe</b>
      </h1>
      <SearchForm setFetchedData={setFetchedData} />

      {searchResults}
    </section>
  )
}

export default Search
