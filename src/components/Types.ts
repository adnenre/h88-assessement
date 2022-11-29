// INPUT TYPE INTERFACE
export interface InputUI extends React.HTMLAttributes<HTMLInputElement> {
    onChange: (data: any) => void;
    value: string;
    placeholder: string | undefined;
}

export type columnType = {
    id: string;
    name: string;
    checked: boolean;
};

export type columnsType = {
    columns: columnType[];
};

export type rowType = {
    id?: string | undefined;
    code: string;
    name: string;
};

export type rowsType = rowType[];

export type rowsPaginationType = {
    next: () => void;
    prev: () => void;
    jump: (page: number) => void;
    currentData: (showPagination: boolean | undefined) => rowType[];
    currentPage: number;
    maxPage: number;
    pageRange: () => (string | number)[] | undefined;
};
export type tableContextType = {
    rows: rowType[];
    _rows: rowsPaginationType;
    columns: columnType[];
    currentSearch: string;
    filterByField: string;
    updateColumns: (cols: columnType[]) => void;
    updateFilterByField: (col: columnType) => void;
    showPagination: boolean | undefined;
};

export type Tabletype = {
    rows: rowType[];
    colsToDisplay?: string[];
    currentSearch: string;
    filterByField?: string;
    showPanel?: boolean;
    showPagination?: boolean;
};
export type tableContainerType = {
    columns: columnType[];
    rows: rowType[];
    currentSearch: string;
    filterByField: string;
    updateColumns: (cols: columnType[]) => void;
    updateFilterByField: (col: columnType) => void;
    showPanel?: boolean;
    showPagination?: boolean | undefined;
};

export type checkBoxType = columnType & {
    onChange: (data: columnType) => void;
};
