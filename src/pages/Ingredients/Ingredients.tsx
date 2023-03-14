import { ErrorFallback, Filter, PageGrid, SEO } from 'components'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

function Ingredients(): JSX.Element {
  const initial = 'Chicken'
  const [optionEntry, setOptionEntry] = React.useState(initial)
  const [ingredientsUrl, setLocationUrl] = React.useState(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${optionEntry}`
  )

  const ingredientsListUrl =
    'https://www.themealdb.com/api/json/v1/1/list.php?i=list'

  React.useEffect(() => {
    setLocationUrl(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${optionEntry}`
    )
  }, [optionEntry])

  return (
    <>
      <SEO
        title="Ingredients"
        description="Explore different food across the world based on their ingredients."
        route="/ingredients"
      />
      <section className="min-h-[100vh]">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Filter
            url={ingredientsListUrl}
            initial={initial}
            setOptionEntry={setOptionEntry}
            valueKey="strIngredient"
          />
        </ErrorBoundary>

        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <PageGrid url={ingredientsUrl} />
        </ErrorBoundary>
      </section>
    </>
  )
}

export default Ingredients
