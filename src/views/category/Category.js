import React from 'react'

import { CFormSelect } from '@coreui/react'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'

// import WidgetsBrand from '../widgets/WidgetsBrand'
// import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Category = () => {
  const options = [
    'Genre',
    { label: 'Ranking', value: 'rank' },
    { label: 'Year', value: 'year' },
    { label: 'Alphabetical', value: 'alphabetical' },
  ]

  options.sort((a, b) => {
    if (typeof a === 'string') {
      return a.localeCompare(b)
    } else {
      return a.label.localeCompare(b.label)
    }
  })

  return (
    <div>
      <span>Filter by: </span>
      <select aria-label="Default select example Category">
        {options.map((option, index) => (
          <option key={index} value={typeof option === 'string' ? option : option.value}>
            {typeof option === 'string' ? option : option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Category
