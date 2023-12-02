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
          'Genre',
          { label: 'Drama', value: 'drama' },
          { label: 'Crime, Drama', value: 'Crime, Drama' },
          { label: 'Others', value: 'others' },
        ]}
      />
    </>
  )
}

export default Category
