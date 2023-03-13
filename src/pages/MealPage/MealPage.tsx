import React from 'react'
import { ErrorFallback, MealDetail } from 'components'
import { ErrorBoundary } from 'react-error-boundary'

function MealPage(): JSX.Element {
  return (
    <section className="min-h-[100vh]">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <MealDetail />
      </ErrorBoundary>
    </section>
  )
}

export default MealPage
