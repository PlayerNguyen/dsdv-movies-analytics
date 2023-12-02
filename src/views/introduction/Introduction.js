import React from 'react'
import styles from '../../assets/css/styles.module.css'
import { CFormSelect } from '@coreui/react'

// import WidgetsBrand from '../widgets/WidgetsBrand'
// import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Introduction = () => {
  return (
    <div>
      <h1 className={styles.Introduction}>Welcome!</h1>
      <CFormSelect
        aria-label="Default select example"
        options={[
          'Open this select menu intro',
          { label: 'One', value: '1' },
          { label: 'Two', value: '2' },
          { label: 'Three', value: '3', disabled: true },
        ]}
      />
    </div>
  )
}

export default Introduction
