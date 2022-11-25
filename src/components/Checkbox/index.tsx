import React from 'react'
import { checkBoxType } from '../Types'

const Checkbox = ({id,name,checked,onChange}:checkBoxType) => {
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const { id , checked ,name } = e.target
        onChange({id,name,checked})
    }
    return (
        <label className="inline-flex items-center px-1">
            <input id={id} type="checkbox" className="form-checkbox h-3 w-3 text-gray-600" onChange={handleChange} checked={checked} name={name} /><span className="ml-2 text-gray-700">{name}</span>
        </label>
    )
}

export default Checkbox;