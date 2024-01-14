import * as d3 from 'd3'
import { useEffect, useRef } from 'react'
import Data from './../../data/data.csv'

const GRAPH_PROPERTY = { width: 700, height: 700, margin: 20 }

export default function PieChart() {
  const ref = useRef()

  useEffect(() => {
    d3.csv(Data).then((csvData) => {
      const allGenres = csvData
        .filter((item) => item.year === '2010')
        .map((item) => item.genre.split(','))
        .flat()

      let data = {}
      allGenres.forEach((item) => {
        if (data[item] === undefined) {
          data[item] = 1
        } else {
          data[item] = data[item] + 1
        }
      })
      console.log(data)

      const svgElement = d3.select(ref.current)

      var radius = Math.min(GRAPH_PROPERTY.width, GRAPH_PROPERTY.height) / 2 - GRAPH_PROPERTY.margin

      // set the color scale
      const color = d3.scaleOrdinal().range(['#98abc5', '#8a89a6', '#7b6888', '#6b486b', '#a05d56'])
      // const color = d3.scaleOrdinal().range(d3.schemeSet3)

      // Compute the position of each group on the pie:
      const pie = d3.pie().value(function (d) {
        return d[1]
      })
      const data_ready = pie(Object.entries(data).filter((_, _index) => _index >= 0))
      var arcGenerator = d3.arc().innerRadius(0).outerRadius(radius)
      // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
      console.log(data_ready)
      svgElement
        .append('g')
        .attr('transform', `translate(${GRAPH_PROPERTY.width / 2}, ${GRAPH_PROPERTY.height / 2})`)
        .selectAll('whatever')
        .data(data_ready)
        .join('path')
        .attr('d', arcGenerator)
        .attr('fill', function (d) {
          return color(d.data[1])
        })
        .attr('stroke', 'black')
        .style('stroke-width', '2px')
        .style('opacity', 0.7)

      svgElement
        .append('g')
        .attr('transform', `translate(${GRAPH_PROPERTY.width / 2}, ${GRAPH_PROPERTY.height / 2})`)
        .selectAll('whatever')
        .data(data_ready)
        .enter()
        .append('text')
        .text(function (d) {
          let percentage = ((d.endAngle - d.startAngle) / (2 * Math.PI)) * 100
          return `${d.data[0]}: ${percentage.toFixed(2)}%`
        })
        .style('font-family', 'sans-serif')
        .style('font-size', 11)
        .style('font-weight', 300)
        .attr('transform', function (d) {
          console.log(arcGenerator.centroid(d))
          return 'translate(' + arcGenerator.centroid(d) + ')'
        })
        .style('text-anchor', 'middle')
        .style('font-size', 11)
        .attr('font-weight', 300)
    })
  }, [])
  return (
    <div>
      <svg ref={ref} style={{ width: GRAPH_PROPERTY.width, height: GRAPH_PROPERTY.height }} />
    </div>
  )
}
