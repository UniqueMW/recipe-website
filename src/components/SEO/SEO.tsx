import React from 'react'
import { Helmet } from 'react-helmet-async'

interface ISEOProps {
  title: string | undefined
  description: string
  route: string
}

function SEO({
  title = 'UniqueMW Recipe',
  description,
  route
}: ISEOProps): JSX.Element {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <link rel="canonical" href={route} />
      <meta name="description" content={description} />
      {/* End standard metadata tags */}
      {/* Facebook tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* End Facebook tags */}
      {/* Twitter tags */}
      <meta name="twitter:creator" content="@UniqueMW265" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* End Twitter tags */}
    </Helmet>
  )
}

export default SEO
