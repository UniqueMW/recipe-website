import { ErrorFallback, Filter, PageGrid, SEO } from 'components'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

function Category(): JSX.Element {
  const initial = 'Vegetarian'
  const [optionEntry, setOptionEntry] = React.useState(initial)
  const [categoryUrl, setCategoryUrl] = React.useState(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${optionEntry}`
  )

  const categoryListUrl =
    'https://www.themealdb.com/api/json/v1/1/list.php?c=list'

  React.useEffect(() => {
    setCategoryUrl(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${optionEntry}`
    )
  }, [optionEntry])

  return (
    <>
      <SEO
        title="category"
        description="A group of recipes based on category e.g breakfast, supper and dinner."
      />
      <section className="min-h-[100vh]">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Filter
            url={categoryListUrl}
            initial={initial}
            setOptionEntry={setOptionEntry}
            valueKey="strCategory"
          />
        </ErrorBoundary>

        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <PageGrid url={categoryUrl} />
        </ErrorBoundary>
      </section>
    </>
  )
}

export default Category
