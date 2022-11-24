import React, {useState} from 'react'
import {render} from '@testing-library/react'
import Table from '../components/Table'
import uniqueId from '../utils'

describe("<Table />", () => {

// table column


//  COUNTRY COMPONENT FOR TEST
function Tabletest(){
   
    const tableprops = {
        columns: [{ id: '1', name: 'code' }, { id: '2', name: 'name' }],
        rows: [{id:uniqueId('test') , code:'AD',name:'Andora'},{id:uniqueId('test') , code:'AD',name:'Andora'}],
        currentSearch: '',
        filterByField: 'code'
       }

  return <Table  {...tableprops}/>
}

const setup = () => {
  const utils = render(<Tabletest />)
  const table = utils.getByTestId('table-test')
  return {
    table,
    ...utils,
  }
}


test('should be able to render an Table component', () => {
    const {table} = setup()
    expect(table).toBeTruthy
  })


})

