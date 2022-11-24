// INPUT TYPE INTERFACE
export interface InputUI extends React.HTMLAttributes<HTMLInputElement> {
    onChange: (data: any) => void,
    value: string
}


export type columnType = {
    id: string,
    name: string,

}

export type columnsType = {
    columns: columnType[]
}


export type rowType = {
    code: string,
    name: string,
}

export type rowsType = {
    rows: rowType[]
}

export type tableContextType = {
    rows: rowType[],
    columns: columnType[],
    currentSearch: string,
    filterByField: string,

}


export type tableType = {
    columns: columnType[],
    rows: rowType[],
    currentSearch: string,
    filterByField: string

}
