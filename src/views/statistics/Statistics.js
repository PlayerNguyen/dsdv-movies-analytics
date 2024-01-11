import { CCol, CRow, CWidgetStatsF } from '@coreui/react'
import PieChart from './PieChart'
import LineChart from './LineChart'
import ScatterPlot from './ScatterPlot'

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
      <CRow xl={{ gutterX: 12, gutterY: 12 }}>
        <CCol xs={10} style={{ background: 'white', borderRadius: '6px', padding: 16 }}>
          <PieChart />
        </CCol>
        <CCol xs={10} style={{ background: 'white', borderRadius: '6px', padding: 16 }}>
          <LineChart />
        </CCol>
        <CCol xs={10} style={{ background: 'white', borderRadius: '6px', padding: 16 }}>
          <ScatterPlot />
        </CCol>
      </CRow>
    </>
  )
}

export default Statistics
