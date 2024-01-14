import PieChart from './PieChart'
import LineChart from './LineChart'
import ScatterPlot from './ScatterPlot'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import BarChart from './BarChart'

// import WidgetsBrand from '../widgets/WidgetsBrand'
// import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Statistics = () => {
  return (
    <>
      {/*<CRow>*/}
      {/*  <CCol xs={3}>*/}
      {/*    <CWidgetStatsF className="mb-3" title="Widget title" value="89.9%" />*/}
      {/*  </CCol>*/}
      {/*  <CCol xs={3}>*/}
      {/*    <CWidgetStatsF className="mb-3" title="Widget title" value="89.9%" />*/}
      {/*  </CCol>*/}
      {/*  <CCol xs={3}>*/}
      {/*    <CWidgetStatsF className="mb-3" title="Widget title" value="89.9%" />*/}
      {/*  </CCol>*/}
      {/*  <CCol xs={3}>*/}
      {/*    <CWidgetStatsF className="mb-3" title="Widget title" value="89.9%" />*/}
      {/*  </CCol>*/}
      {/*</CRow>*/}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Top movies&apos; genre from 2012 to 2022
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
          Average rating over 10 years (2012-2022)
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
          Relationship between the rating index and the revenue of the box office (2012-2022)
        </AccordionSummary>
        <AccordionDetails>
          <ScatterPlot />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          Budgets spending to make a movies (2012-2022)
        </AccordionSummary>
        <AccordionDetails>
          <BarChart />
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default Statistics
