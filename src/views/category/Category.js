import React from 'react'

import { CTable } from '@coreui/react'
//import { getStyle, hexToRgba } from '@coreui/utils'
//import CIcon from '@coreui/icons-react'

// import WidgetsBrand from '../widgets/WidgetsBrand'
// import WidgetsDropdown from '../widgets/WidgetsDropdown'

/*const Category = () => {
  const options = [
    'Genre',
    { label: 'Ranking', value: 'rank' },
    { label: 'Year', value: 'year' },
    { label: 'Alphabetical', value: 'alphabetical' },
  ]

  options.sort((a, b) => {
    if (typeof a === 'string') {
      return a.localeCompare(b)
    } else {
      return a.label.localeCompare(b.label)
    }
  })

  return (
    <div>
      <span>Filter by: </span>
      <select aria-label="Default select example Category">
        {options.map((option, index) => (
          <option key={index} value={typeof option === 'string' ? option : option.value}>
            {typeof option === 'string' ? option : option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

const Table = () => {
  const columns = [
    {
      key: 'id',
      label: '#',
      _props: {scope: 'col'},
    },
    {
      key: 'class',
      _props: {scope: 'col'},
    },
    {
      key: 'heading_1',
      label: 'Heading',
      _props: {scope: 'col'},
    },
    {
      key: 'heading_2',
      label: 'Heading',
      _props: {scope: 'col'},
    },
  ]
  const items = [
    {
      id: 1,
      class: 'Mark',
      heading_1: 'Otto',
      heading_2: '@mdo',
      _cellProps: {id: {scope: 'row'}},
    },
    {
      id: 2,
      class: 'Jacob',
      heading_1: 'Thornton',
      heading_2: '@fat',
      _cellProps: {id: {scope: 'row'}},
    },
    {
      id: 3,
      class: 'Larry the Bird',
      heading_2: '@twitter',
      _cellProps: {id: {scope: 'row'}, class: {colSpan: 2}},
    },
  ]


  return <CTable columns={columns} items={items}/>

  <CTable>
    <CTableHead>
      <CTableRow>
        <CTableHeaderCell scope="col">#</CTableHeaderCell>
        <CTableHeaderCell scope="col">Class</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
      </CTableRow>
    </CTableHead>
    <CTableBody>
      <CTableRow>
        <CTableHeaderCell scope="row">1</CTableHeaderCell>
        <CTableDataCell>Mark</CTableDataCell>
        <CTableDataCell>Otto</CTableDataCell>
        <CTableDataCell>@mdo</CTableDataCell>
      </CTableRow>
      <CTableRow>
        <CTableHeaderCell scope="row">2</CTableHeaderCell>
        <CTableDataCell>Jacob</CTableDataCell>
        <CTableDataCell>Thornton</CTableDataCell>
        <CTableDataCell>@fat</CTableDataCell>
      </CTableRow>
      <CTableRow>
        <CTableHeaderCell scope="row">3</CTableHeaderCell>
        <CTableDataCell colSpan={2}>Larry the Bird</CTableDataCell>
        <CTableDataCell>@twitter</CTableDataCell>
      </CTableRow>
    </CTableBody>
  </CTable>

}

export default Category*/

const CategoryTable = () => {
  const options = [
    'Genre',
    { label: 'Ranking', value: 'rank' },
    { label: 'Year', value: 'year' },
    { label: 'Alphabetical', value: 'alphabetical' },
  ]

  options.sort((a, b) => {
    if (typeof a === 'string') {
      return a.localeCompare(b)
    } else {
      return a.label.localeCompare(b.label)
    }
  })

  const columns = [
    {
      key: 'id',
      label: 'ID',
      _props: { scope: 'col' },
    },
    {
      key: 'name',
      label: 'Name',
      _props: { scope: 'col' },
    },
    {
      key: 'year',
      label: 'Year',
      _props: { scope: 'col' },
    },
    {
      key: 'heading_1',
      label: 'Ranking',
      _props: { scope: 'col' },
    },
    {
      key: 'heading_2',
      label: 'Genre',
      _props: { scope: 'col' },
    },
  ]

  const items = [
    {
      id: 1,
      name: 'Interstellar',
      year: '2014',
      heading_1: '8.6',
      heading_2: 'Adventure,Drama,Sci-Fi',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 2,
      name: 'Parasite',
      year: '2019',
      heading_1: '8.5',
      heading_2: 'Drama,Thriller',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 3,
      name: 'Whiplash',
      year: '2014',
      heading_1: '8.5',
      heading_2: 'Drama,Music',
      _cellProps: { id: { scope: 'row' } },
    },
  ]

  return (
    <div>
      <span>Filter by: </span>
      <select aria-label="Default select example Category">
        {options.map((option, index) => (
          <option key={index} value={typeof option === 'string' ? option : option.value}>
            {typeof option === 'string' ? option : option.label}
          </option>
        ))}
      </select>

      <CTable columns={columns} items={items} />
    </div>
  )
}

export default CategoryTable
