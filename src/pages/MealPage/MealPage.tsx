import React from 'react'
import { ErrorFallback, MealDetail, SEO } from 'components'
import { ErrorBoundary } from 'react-error-boundary'

function MealPage(): JSX.Element {
  const [mealTitle, setMealTitle] = React.useState<string>()
  return (
    <>
      <SEO
        title={mealTitle}
        description="Bookmark ,watch and learn how to make a meal. "
        route="/meal/:id"
      />
      <section className="min-h-[100vh]">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <MealDetail setMealTitle={setMealTitle} />
        </ErrorBoundary>
      </section>
    </>
  )
}

export default MealPage
