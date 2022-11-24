import React from 'react'
import { capitalize } from "../../utils"
import { useTableContext } from "./TableContext"
import TableHeaderCell from "./TableHeaderCell"
import TableRow from "./TableRowCell"

const TableHead = () => {
    const { columns } = useTableContext()
    return (
        <thead >
            <TableRow>
                {columns.map(({id,name}) => <TableHeaderCell key={id}>{capitalize(name) }</TableHeaderCell>)}
            </TableRow>
        </thead>
    )
}

export default TableHead