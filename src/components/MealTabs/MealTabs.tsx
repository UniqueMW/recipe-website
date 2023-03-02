import * as React from 'react'

interface IMealTabs {
  ingredients: string[] | undefined
  measurements: string[] | undefined
  instructions: string
}

function MealTabs(props: IMealTabs): JSX.Element {
  const [activeTab, setActiveTab] = React.useState('INSTRUCTIONS')

  // returns elements to display based on activeTab value
  const activeTabDisplay = React.useMemo(() => {
    if (activeTab === 'INSTRUCTIONS') {
      return (
        <p className="text-lg border-x border-b border-gray-500 px-2 py-4 text-justify tracking-wider h-64 max-h-full overflow-auto scrollbar-thumb-action scrollbar-track-transparent scrollbar-thin">
          {props.instructions}
        </p>
      )
    } else if (activeTab === 'INGREDIENTS') {
      const listOfIngredients = props.ingredients?.map((item, index) => {
        return <li key={`${item}${index}`}>{item}</li>
      })
      return (
        <ul className="text-lg border-x border-b border-gray-500 px-2 py-4 text-justify tracking-wider min-w-[100%] h-64 max-h-full overflow-auto scrollbar-thumb-action scrollbar-track-transparent scrollbar-thin">
          {listOfIngredients}
        </ul>
      )
    } else if (activeTab === 'MEASUREMENTS') {
      const listOfMeasurements = props.measurements?.map((item, index) => {
        return <li key={`${item}${index}`}>{item}</li>
      })
      return (
        <ul className="text-lg border-x border-b border-gray-500 px-2 py-4 text-justify tracking-wider h-64 max-h-full overflow-auto scrollbar-thumb-action scrollbar-track-transparent scrollbar-thin">
          {listOfMeasurements}
        </ul>
      )
    }
  }, [activeTab])

  // changes activeTab on click
  const handleActiveTab = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    setActiveTab(event.currentTarget.innerText.toUpperCase())
  }

  return (
    <section className="flex flex-col min-w-full">
      <div className="grid md:grid-cols-4 grid-cols-3 font-sans md:text-lg text-base tracking-widest min-w-fit">
        <button
          className={`${
            activeTab === 'INSTRUCTIONS'
              ? 'border-x border-t text-action font-semibold'
              : 'border-b'
          } border-gray-500 min-w-fit`}
          onClick={handleActiveTab}
        >
          Instructions
        </button>
        <button
          className={`${
            activeTab === 'INGREDIENTS'
              ? 'border-x border-t text-action font-semibold'
              : 'border-b'
          } border-gray-500 min-w-fit`}
          onClick={handleActiveTab}
        >
          Ingredients
        </button>
        <button
          className={`${
            activeTab === 'MEASUREMENTS'
              ? 'border-x border-t text-action font-semibold'
              : 'border-b'
          } border-gray-500 min-w-fit`}
          onClick={handleActiveTab}
        >
          Measurements
        </button>
        <div className=" border-b border-gray-500 hidden md:block" />
      </div>

      {activeTabDisplay}
    </section>
  )
}

export default MealTabs
