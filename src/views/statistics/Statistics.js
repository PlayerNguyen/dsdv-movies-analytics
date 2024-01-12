import { CCol, CRow, CWidgetStatsF } from '@coreui/react'
import PieChart from './PieChart'
import LineChart from './LineChart'
import ScatterPlot from './ScatterPlot'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Accordion 1
        </AccordionSummary>
        <AccordionDetails>
          <PieChart />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Accordion 2
        </AccordionSummary>
        <AccordionDetails>
          <LineChart />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Accordion 3
        </AccordionSummary>
        <AccordionDetails>
          <ScatterPlot />
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default Statistics
