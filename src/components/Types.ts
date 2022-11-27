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
    code: string;
    name: string;
};

export type rowsType = {
    rows: rowType[];
};

export type tableContextType = {
    rows: rowType[];
    columns: columnType[];
    currentSearch: string;
    filterByField: string;
    updateColumns: (cols: columnType[]) => void;
    updateFilterByField: (col: columnType) => void;
};

export type Tabletype = {
    rows : rowType[],
    colsToDisplay? : string[],
    currentSearch : string,
    filterByField?: string,
    displayPanel?  : boolean
}
export type tableContainerType = {
    columns: columnType[];
    rows: rowType[];
    currentSearch: string;
    filterByField: string;
    updateColumns: (cols: columnType[]) => void;
    updateFilterByField: (col: columnType) => void;
    displayPanel? : boolean 
};

export type checkBoxType = columnType & {
    onChange: (data: columnType) => void;
};
