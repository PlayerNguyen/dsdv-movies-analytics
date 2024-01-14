import * as d3 from 'd3'
import React, { useEffect, useRef } from 'react'
import Data from './../../data/data.csv'

const GRAPH_PROPERTY = { width: 1000, height: 500, margin: 120 }
export default function ScatterPlot() {
  const ref = useRef()
  useEffect(() => {
    d3.csv(Data).then((csvData) => {
      const dataFrom2010 = csvData.filter((item) => item.year >= 2010)
      const svgElement = d3.select(ref.current)
      const xScale = d3
        .scaleLinear()
        .domain([2009, 2023])
        .range([0, GRAPH_PROPERTY.width - GRAPH_PROPERTY.margin])
      const yScale = d3
        .scaleLinear()
        .domain([8, 8.7])
        .range([GRAPH_PROPERTY.height - GRAPH_PROPERTY.margin, 0])
      let maxBoxOffice = 0
      csvData.forEach((item) => {
        if (parseFloat(item.year) >= 2010 && parseFloat(item.box_office) > maxBoxOffice) {
          maxBoxOffice = parseFloat(item.box_office)
        }
      })
      let minBoxOffice = maxBoxOffice
      csvData.forEach((item) => {
        if (parseFloat(item.year) >= 2010 && parseFloat(item.box_office) < minBoxOffice) {
          minBoxOffice = parseFloat(item.box_office)
        }
      })
      console.log(minBoxOffice, maxBoxOffice)
      dataFrom2010.forEach((item) => {
        let itemBoxOffice = parseFloat(item.box_office)
        if (isNaN(itemBoxOffice))
          item.box_office = Math.random() * (maxBoxOffice - minBoxOffice) + minBoxOffice
      })
      const colorScale = d3
        .scaleLinear()
        .domain([minBoxOffice, maxBoxOffice])
        .range(['white', 'blue'])
      const xAxis = d3.axisBottom(xScale).ticks(10)
      const yAxis = d3.axisLeft(yScale).ticks(10)
      svgElement
        .append('text')
        .attr('transform', `translate(500,450)`)
        .text('Year')
        .style('text-anchor', 'middle')
        .style('font-size', '20px')
        .style('font-weight', 'bold')
      svgElement
        .append('text')
        .attr('transform', `translate(40,200)rotate(-90)`)
        .text('Rating')
        .style('text-anchor', 'middle')
        .style('font-size', '20px')
        .style('font-weight', 'bold')
      svgElement
        .append('g')
        .attr('transform', `translate(90,${GRAPH_PROPERTY.height - GRAPH_PROPERTY.margin + 10})`)
        .call(xAxis)
      svgElement.append('g').attr('transform', `translate(90,10)`).call(yAxis)
      let tooltip1 = d3
        .select('body')
        .append('div')
        .style('position', 'absolute')
        .style('visibility', 'hidden')
        .style('background-color', 'white')
        .style('border', 'solid')
        .style('border-width', '1px')
        .style('border-radius', '5px')
        .style('padding', '10px')

      let dots = svgElement.append('g').selectAll('dot').data(dataFrom2010)
      dots
        .enter()
        .append('circle')
        .attr('cx', function (d) {
          return xScale(d.year)
        })
        .attr('cy', function (d) {
          return yScale(d.rating)
        })
        .attr('r', 0)
        .attr('transform', `translate(90,10)`)
        .style('fill', function (d) {
          return colorScale(d.box_office)
        })
        .style('opacity', (d) => {
          return colorScale(d.box_office) === 'white' ? 0 : 0.7
        })
        .style('stroke', 'black')
        .style('stroke-width', '0px')
        .on('mouseover', mouseover)
        .on('mouseout', function () {
          d3.select(this)
            .style('stroke-width', '1px')
            .style('stroke', 'black')
            .style('opacity', 0.7)
          tooltip1.style('visibility', 'hidden')
        })
        .transition()
        .duration(1000)
        .attr('r', 10)
        .style('stroke-width', '1px')
        .style('stroke', 'black')

      function mouseover(event) {
        const seletedData = d3.select(this).data()[0]
        console.log(seletedData)
        d3.select(this).style('stroke-width', '3px').style('stroke', 'red').style('opacity', 1)
        tooltip1
          .html(
            `
            <ul>
              <li>Movie: ${seletedData.name}</li>
              <li>Year: ${seletedData.year}</li>
              <li>Rating: ${seletedData.rating}</li>
              <li>Box Office Revenue: ${parseFloat(seletedData.box_office).toFixed(2)}$</li>
            </ul>
           `,
          )
          .style('visibility', 'visible')
          .style('top', event.pageY - 10 + 'px')
          .style('left', event.pageX + 10 + 'px')
      }
    })
  }, [])
  return (
    <div>
      <svg ref={ref} width={GRAPH_PROPERTY.width} height={GRAPH_PROPERTY.height}></svg>
    </div>
  )
}
