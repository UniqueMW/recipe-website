import React from 'react'
import { PageNotFound, SEO } from 'components'

function Page404(): JSX.Element {
  return (
    <>
      <SEO title="404" description="" route="*" />
      <section className="min-h-[100vh]">
        <PageNotFound />
      </section>
    </>
  )
}

export default Page404
