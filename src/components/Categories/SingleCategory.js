import React from 'react'

export default function SingleCategory(props) {
  //deconstructing props from the category props
  const {catName, catDesc} = props.category
  return (
    <tr>
      <td>{catName}</td>
      <td>{catDesc}</td>
    </tr>
  )
}
