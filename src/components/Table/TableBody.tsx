import React, { useEffect} from 'react';
import uniqueId from '../../utils';

import { isChecked } from './utils';
import TableBodyCell from './TableBodyCell';
import { useTableContext } from './TableContext';
import TableRow from './TableRow';

const TableBody = () => {
    // TABLE CONTEXT
    const { columns, _rows, showPagination ,currentSearch} = useTableContext();

    // ADD UNIQUE ID
    const dataRows = _rows
        .currentData(showPagination)
        .map((row) => ({ id: uniqueId('tr'), ...row }));

    // ARRAY OF COLUMN TO DISPLAY
    const columnTodisplay = columns.filter(isChecked).map(({ name }) => name);
    
    const setFirstPage = () => _rows.jump(1)
    // SET PAGE 1 ON CURRENT SEARCH CHANGE
  useEffect(() =>{
    setFirstPage()
  },[currentSearch])
    return (
        <tbody>
            {dataRows.map((row) => (
                <TableRow key={row.id}>
                    {Object.values(columnTodisplay).map((item) => (
                        <TableBodyCell key={row.id + '-' + item}>
                            {row[item as keyof typeof row]}
                        </TableBodyCell>
                    ))}
                </TableRow>
            ))}
        </tbody>
    );
};

export default TableBody;
