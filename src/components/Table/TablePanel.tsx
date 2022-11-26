import React, { useRef, useState } from 'react';
import { columnType } from '../Types';
import { useTableContext } from './TableContext';
import Checkbox from '../Checkbox';
import useOnClickOutside from '../../Hooks';
import Icon from '../Icon/Icon';

const List = () => {
    // GET COLUMNS AND THE FUNCTION UPDATECOLUMNS FOR THE TABLE CONTEXT
    const { updateColumns, columns } = useTableContext();

    // COLUMN STATE
    const [columnsState, setColumnsState] = useState<columnType[]>(columns);

    // EVENT HANDELER
    const handleChange = (data: columnType) => {
        // UPDATE CURRENT UPDATED COL STATE
        let newState = [...columnsState].map((col) => {
            if (col.id === data.id) {
                return { ...col, ...data };
            }
            return col;
        });
        // REFLECT CHNAGE ON THE STATE OF THE LIST PANEL
        setColumnsState(newState);

        // REFLECT CHANGE ON THE TABLE COLUMNS
        updateColumns(newState);
    };
    return (
        <div className="p-2 border-1">
            <div className="grid grid-cols-1 divide-y-[3px] ">
                {columnsState.map((col) => (
                    <Checkbox
                        key={col.id}
                        id={col.id}
                        name={col.name}
                        checked={col.checked}
                        onChange={handleChange}
                    />
                ))}
            </div>
        </div>
    );
};

const TablePanel = () => {
    // REFERENCE OF THE PANEL
    const currentRef = useRef(null);

    // PANEL STATE
    const [open, setOpen] = useState<Boolean>(false);

    // HANDLE TOGGLE PANEL
    const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setOpen(!open);
    };

    // CUSTOM HOOK TO TRIGGER OUTSIDE CLICK
    useOnClickOutside(currentRef, () => setOpen(false));

    return (
        <div className="flex flex-col absolute  z-10 rounded-t-lg text-black right-0 top-[-20px] drop-shadow-2xl ">
            <button
                className=" border rounded-t h-[20px] w-[25px] self-end bg-white flex hover:bg-blue-400 hover:border-blue-400"
                onClick={handleToggle}
            >
                <Icon name="gear" />
            </button>
            <div
                ref={currentRef}
                className={
                    open
                        ? 'h-auto bg-white w-[100px] rounded-b rounded-tl'
                        : 'h-[0px] overflow-hidden'
                }
            >
                <List />
            </div>
        </div>
    );
};

export default TablePanel;
