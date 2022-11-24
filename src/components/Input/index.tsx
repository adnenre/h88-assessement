import React,{ useRef,useEffect } from 'react'
import { InputUI } from '../Types'

const Input = ({value, onChange ,...props }: InputUI) => {
  
    const inputRef = useRef<HTMLInputElement>(null)

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const valueUppercase = value.toUpperCase();
      
        onChange(valueUppercase)
    }
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    },[])

    return (
        <input ref={inputRef} value={value} onChange={handleChange} aria-label="search-input" className='w-full mb-4 p-5 text-gray-900 whitespace-no-wrap dark:text-white bg-gray-100 hover:bg-white focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none transition-all' {...props} />
    )
}

export default Input