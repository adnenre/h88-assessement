import React, {useState } from 'react';
import uniqueId from '../../utils';
import {  rowType, tableContainerType, Tabletype } from '../Types';
import TableBody from './TableBody';
import { TableContext } from './TableContext';
import TableHead from './TableHead';
import TablePanel from './TablePanel';
import { columnType } from '../Types';
import { buildColumns } from './utils';

const TableContainer = ({
    updateFilterByField,
    updateColumns,
    columns,
    rows,
    currentSearch,
    filterByField,
    displayPanel,
    ...rest
}: tableContainerType) => {
    const { Provider } = TableContext;
    return (
        <Provider
            value={{
                updateColumns,
                updateFilterByField,
                columns,
                rows,
                currentSearch,
                filterByField,
            }}
        >
            <div className="relative ">
                {displayPanel && <TablePanel /> }
                <div className="h-[60vh] bg-white overflow-auto">
                    <table className="relative min-w-full table-fixed" {...rest} data-testid="table-test">
                        <TableHead />
                        <TableBody />
                    </table>
                </div>
            </div>
        </Provider>
    );
};






// TABLE COMPONENT 
const Table = ({ rows, currentSearch , filterByField,colsToDisplay,displayPanel }:Tabletype) => {
    const initialFiterByField = filterByField ? filterByField : Object.keys(rows[0])[0]
    // 
    const initialColumns = buildColumns(rows,colsToDisplay)
    // COLUMNS STATE
    const [columns, setColumns] = useState<columnType[]>(initialColumns);
    // SEARCH BY
    const [filterBy, setFilterBy] = useState<string>(initialFiterByField);

    // Event HANDLER UPDATE COLUMNS
    const handleUpdateColumns = (data: columnType[]) => {
        setColumns(data);
    };
    // EVENT HANDLER UPDATE COLUMN TO FILTER BY
    const handleupdateFilterByField = (col: columnType): void => {
        setFilterBy(col.name);
    };
    
    return (
        <TableContainer  
            columns={columns}
            rows={rows}
            currentSearch={currentSearch}
            filterByField={filterBy}
            updateColumns={handleUpdateColumns}
            updateFilterByField={handleupdateFilterByField}
            displayPanel={displayPanel}
        />
    );
};

export default Table
