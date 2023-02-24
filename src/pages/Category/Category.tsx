import { Filter, PageGrid } from 'components'
import React from 'react'

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
      <Filter
        url={categoryListUrl}
        initial={initial}
        setOptionEntry={setOptionEntry}
        valueKey="strCategory"
      />
      <PageGrid url={categoryUrl} />
    </>
  )
}

export default Category
