import React from 'react'

import { CFormSelect } from '@coreui/react'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'

// import WidgetsBrand from '../widgets/WidgetsBrand'
// import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Introduction = () => {
  return (
    <>
      <CFormSelect
        aria-label="Default select example"
        options={[
          'Open this select menu intro',
          { label: 'One', value: '1' },
          { label: 'Two', value: '2' },
          { label: 'Three', value: '3', disabled: true },
        ]}
      />
    </>
  )
}

export default Introduction
