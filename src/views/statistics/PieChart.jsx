import * as d3 from 'd3'
import Data from './../../data/data.csv'

d3.csv(Data).then((data) => {
  console.log(data)
})

export default function PieChart() {
  return <div>PieChart</div>
}
