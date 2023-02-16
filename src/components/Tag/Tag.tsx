import React from 'react'

interface TagProps {
  content: string
  children: JSX.Element
}

// TODO Add tag click functionality to go to category and location page if clicked
function Tag(props: TagProps): JSX.Element {
  return (
    <div className="bg-[rgba(110,190,243,0.2)] py-2 px-4 flex flex-row space-x-2 rounded-full md:text-lg text-base font-normal font-sans">
      {props.children}
      <h2>{props.content}</h2>
    </div>
  )
}

export default Tag
