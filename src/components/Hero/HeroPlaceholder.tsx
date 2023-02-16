import {
  HeadingPlaceholder,
  ImagePlaceholder,
  TextPlaceholder
} from 'loading_components'
import React from 'react'

function HeroPlaceholder(): JSX.Element {
  return (
    <section className="flex lg:flex-row flex-col-reverse lg:max-h-[90vh] md:px-12 px-2 shadow-sm">
      <section className="flex flex-col min-w-[40vw] md:space-y-14 space-y-8 items-center px-4 py-10">
        <HeadingPlaceholder />
        <TextPlaceholder />
      </section>
      <ImagePlaceholder />
    </section>
  )
}

export default HeroPlaceholder
