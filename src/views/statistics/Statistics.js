import { CCol, CRow, CWidgetStatsF } from '@coreui/react'
import PieChart from './PieChart'

// import WidgetsBrand from '../widgets/WidgetsBrand'
// import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Statistics = () => {
  return (
    <>
      <CRow>
        <CCol xs={3}>
          <CWidgetStatsF className="mb-3" title="Widget title" value="89.9%" />
        </CCol>
        <CCol xs={3}>
          <CWidgetStatsF className="mb-3" title="Widget title" value="89.9%" />
        </CCol>
        <CCol xs={3}>
          <CWidgetStatsF className="mb-3" title="Widget title" value="89.9%" />
        </CCol>
        <CCol xs={3}>
          <CWidgetStatsF className="mb-3" title="Widget title" value="89.9%" />
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={3}>
          <div>Bổ sung charts như design dứới đây nhé</div>
        </CCol>
        <CCol>
          <PieChart />
        </CCol>
      </CRow>
    </>
  )
}

export default Statistics
