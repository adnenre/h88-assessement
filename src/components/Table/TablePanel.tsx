import React, { useRef, useState } from 'react'
import { columnType } from '../Types'
import { useTableContext } from './TableContext'
import Checkbox from '../Checkbox'
import useOnClickOutside from '../../Hooks'



const List = () => {
    // GET COLUMNS AND THE FUNCTION UPDATECOLUMNS FOR THE TABLE CONTEXT
    const { updateColumns, columns } = useTableContext()

    // COLUMN STATE
    const [columnsState, setColumnsState] = useState<columnType[]>(columns)

    // EVENT HANDELER
    const handleChange = (data: columnType) => {

        // UPDATE CURRENT UPDATED COL STATE
        let newState = [...columnsState].map(col => {
            if (col.id === data.id) {
                return { ...col, ...data }
            }
            return col;
        })
        // REFLECT CHNAGE ON THE STATE OF THE LIST PANEL
        setColumnsState(newState)

        // REFLECT CHANGE ON THE TABLE COLUMNS
        updateColumns(newState)

    }
    return (
        <div className="p-2 border-1">
            <div className="grid grid-cols-1 divide-y-[3px] ">

                {columnsState.map(col => <Checkbox key={col.id} id={col.id} name={col.name} checked={col.checked} onChange={handleChange} />)}

            </div>
        </div>
    )
}


const TablePanel = () => {

    // REFERENCE OF THE PANEL
    const currentRef = useRef(null);

    // PANEL STATE 
    const [open, setOpen] = useState<Boolean>(false);

    // HANDLE TOGGLE PANEL
    const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setOpen(!open)
    }

    // CUSTOM HOOK TO TRIGGER OUTSIDE CLICK
    useOnClickOutside(currentRef, () => setOpen(false))

    return (
        <div className='flex flex-col absolute  z-10 rounded-t-lg text-black right-0 top-[-20px] drop-shadow-2xl ' >
            <button className=' border rounded-t h-[20px] w-[25px] self-end bg-white flex hover:bg-blue-500 hover:border-blue-500' onClick={handleToggle}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" m-auto w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </button>
            <div ref={currentRef} className={open ? 'h-auto bg-white w-[100px] rounded-b rounded-tl' : 'h-[0px] overflow-hidden'}>
                <List />
            </div>
        </div>
    )
}

export default TablePanel