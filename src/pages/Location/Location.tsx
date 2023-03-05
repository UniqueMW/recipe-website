import { Filter, PageGrid } from 'components'
import React from 'react'

function Location(): JSX.Element {
  const initial = 'American'
  const [optionEntry, setOptionEntry] = React.useState(initial)
  const [locationUrl, setLocationUrl] = React.useState(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${optionEntry}`
  )

  const locationListUrl =
    'https://www.themealdb.com/api/json/v1/1/list.php?a=list'

  React.useEffect(() => {
    setLocationUrl(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${optionEntry}`
    )
  }, [optionEntry])

  return (
    <section className="min-h-[100vh]">
      <Filter
        url={locationListUrl}
        initial={initial}
        setOptionEntry={setOptionEntry}
        valueKey="strArea"
      />
      <PageGrid url={locationUrl} />
    </section>
  )
}

export default Location
