import React from 'react'

import { CFormSelect } from '@coreui/react'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'

// import WidgetsBrand from '../widgets/WidgetsBrand'
// import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Category = () => {
  return (
    <>
      <CFormSelect
        aria-label="Default select example Category"
        options={[
          'Open this select menu hi',
          { label: 'One', value: '1' },
          { label: 'Two', value: '2' },
          { label: 'Three', value: '3', disabled: true },
        ]}
      />
    </>
  )
}

export default Category
