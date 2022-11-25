import React from 'react'

type tableCellProps = {
    children : React.ReactNode
}
const TableBodyCell = ({children,...rest}:tableCellProps) => {
  return (
    <td className='w-auto px-4 py-3 border-b border-gray-200 bg-white dark:bg-gray-700 text-sm text-center' {...rest}>
       <p className=" text-gray-900 whitespace-no-wrap dark:text-white">{children}</p>
    </td>
  )
}

export default TableBodyCell