import React from 'react'
import { capitalize } from "../../utils"
import { columnType } from '../Types'
import { useTableContext } from "./TableContext"
import TableHeaderCell from "./TableHeaderCell"
import TableRow from "./TableRowCell"

const TableHead = () => {
    const { columns } = useTableContext()
    const isChecked = (col :columnType) => col.checked;
    return (
        <thead >
            <TableRow>
                {columns.filter(isChecked).map(({id,name}) => <TableHeaderCell key={id}>{capitalize(name) }</TableHeaderCell>)}
            </TableRow>
        </thead>
    )
}

export default TableHead