import { Filter, PageGrid } from 'components'
import React from 'react'

function Ingredients(): JSX.Element {
  const initial = 'Chicken'
  const [optionEntry, setOptionEntry] = React.useState(initial)
  const [ingredientsUrl, setLocationUrl] = React.useState(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${optionEntry}`
  )

  const ingredientsListUrl =
    'https://www.themealdb.com/api/json/v1/1/list.php?i=list'

  React.useEffect(() => {
    setLocationUrl(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${optionEntry}`
    )
  }, [optionEntry])

  return (
    <section className="min-h-[100vh]">
      <Filter
        url={ingredientsListUrl}
        initial={initial}
        setOptionEntry={setOptionEntry}
        valueKey="strIngredient"
      />
      <PageGrid url={ingredientsUrl} />
    </section>
  )
}

export default Ingredients
