import React from 'react';
import { render } from '@testing-library/react';
import Table from '../components/Table';
import { columnType, Tabletype } from '../components/Types';
import { buildColumns } from '../components/Table/utils';


describe('<Table />', () => {
    // table column

    //  COUNTRY COMPONENT FOR TEST
    const colsToDisplay = ['code', 'name'];
    const rows = [
        { code: 'AD', name: 'Andora', phone: '376', native: 'Andora' },
        { code: 'Al', name: 'Anguilla', phone: '1264', native: 'anguilla' },
    ];
    const tableprops = {
        colsToDisplay,
        rows,
        currentSearch: '',
        filterByField: 'code',
        updateColumns: (cols: columnType[]) => cols,
        updateFilterByField: (col: columnType) => col,
    }

    const Tabletest = (props:Tabletype) => <Table {...props} />;
    
    const setup = () => {
        const utils = render(<Tabletest { ...tableprops}/>);
        const table = utils.getByTestId('table-test');
        const tableHeader = utils.getByTestId('table-header-testid');
        return {
            table,
            tableHeader,
            ...utils,
        };
    };

    const setupWithoutInitialColumns = () => {
        const tprops = {...tableprops,colsToDisplay:undefined}
        const utils = render(<Tabletest { ...tprops} />);
        const table = utils.getByTestId('table-test');
        const tableHeader = utils.getByTestId('table-header-testid');
        return {
            table,
            tableHeader,
            ...utils,
        };
    };

    const setupWithPanel = () => {
        const utils = render(<Tabletest displayPanel { ...tableprops}/>);
        const table = utils.getByTestId('table-test');
        const panel = utils.getByTestId('table-panel-testid');
        const list = utils.getByTestId('table-panel-list-testid')
        return {
            table,
            panel,
            list,
            ...utils,
        };
    };

    test('should be able to render an Table component', () => {
        const { table } = setup();
        expect(table).toBeTruthy;
    });

    test('should be able to render table header columns with provided colsToDisplay', () => {
        const { tableHeader } = setup();
        const expected = buildColumns(rows, colsToDisplay).filter(({ checked }) => checked).length;
        expect(tableHeader.children[0].childElementCount).toBe(expected);
    });

    test('should be able to render table header with all columns', () => {
        const { tableHeader } = setupWithoutInitialColumns();
        const expected = buildColumns(rows, undefined).length;
        expect(tableHeader.children[0].childElementCount).toBe(expected);
    });

    test('should be able to render table left panel ', () => {
        const { panel } = setupWithPanel();
        expect(panel).toBeTruthy;
    });

    test('should be able to render table left panel and list of checkbox inside ', () => {
        const { list } = setupWithPanel();
        expect(list).toBeTruthy;
    });

    test('should be able to render the correct number of column to filter with in the left side panel ', () => {
        const { list } = setupWithPanel();
        const expected = buildColumns(rows, undefined).length;
        expect(list.childElementCount).toBe(expected);
    });
});
