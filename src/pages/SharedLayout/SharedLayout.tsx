import React from 'react'
import { Nav } from 'components'
import { Outlet } from 'react-router-dom'

function SharedLayout(): JSX.Element {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}

export default SharedLayout
