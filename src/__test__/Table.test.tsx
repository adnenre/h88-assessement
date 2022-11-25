import React, {useState} from 'react'
import {render} from '@testing-library/react'
import Table from '../components/Table'
import uniqueId from '../utils'
import { columnType } from '../components/Types'

describe("<Table />", () => {

// table column


//  COUNTRY COMPONENT FOR TEST
const cols = [{ id: '1', name: 'code' ,checked:false}, { id: '2', name: 'name',checked:false }]
function Tabletest(){
   
    const tableprops = {
        columns: cols,
        rows: [{id:uniqueId('test') , code:'AD',name:'Andora'},{id:uniqueId('test') , code:'AD',name:'Andora'}],
        currentSearch: '',
        filterByField: 'code',
        updateColumns : (cols:columnType[]) => cols
       }

  return <Table   {...tableprops}/>
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

