import React from 'react'
import { tableType } from '../Types'
import TableBody from './TableBody'
import { TableContext } from './TableContext'
import TableHead from './TableHead'
const Table = ({ columns, rows, currentSearch, filterByField, ...rest }: tableType) => {
    const { Provider } = TableContext
    return (
        <Provider value={{ columns, rows, currentSearch, filterByField }}>
            <div className='h-[60vh] bg-white overflow-auto'>
                <table className='relative min-w-full' {...rest} data-testid="table-test">
                    <TableHead />
                    <TableBody />
                </table>
            </div>
        </Provider>
    )
}

export default Table