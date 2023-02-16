import React from 'react'
import imageSkeleton from 'assets/placeholderImage2.svg'

function ImagePlaceholder(): JSX.Element {
  return (
    <img src={imageSkeleton} alt="image skeleton" className="animate-pulse" />
  )
}

export default ImagePlaceholder
