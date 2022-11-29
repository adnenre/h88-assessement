import React from 'react';
import { capitalize } from '../../utils';
import Icon from '../Icon/Icon';
import { columnType } from '../Types';
import { isChecked } from './utils';
import { useTableContext } from './TableContext';
import TableHeaderCell from './TableHeaderCell';
import TableRow from './TableRow';

const TableHead = () => {
    const { columns, updateFilterByField, filterByField } = useTableContext();

    // TRIGGER HEAD CELL CLICK
    const handleHeadCellClick = (col: columnType) => (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        updateFilterByField(col);
    };
    return (
        <thead data-testid="table-header-testid">
            <TableRow>
                {columns.filter(isChecked).map((col) => (
                    <TableHeaderCell key={col.id} onClick={handleHeadCellClick(col)}>
                        {filterByField === col.name ? <Icon name="funnel"></Icon> : null}
                        {capitalize(col.name)}
                    </TableHeaderCell>
                ))}
            </TableRow>
        </thead>
    );
};

export default TableHead;
