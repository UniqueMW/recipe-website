import React from 'react'
import errorImage from 'assets/error-svgrepo-com.svg'
// TODO finish the component.
function ErrorFallback(): JSX.Element {
  return (
    <section>
      <img src={errorImage} alt="Error" />
      <h1>Ooops Something Went Wrong.</h1>
    </section>
  )
}

export default ErrorFallback
