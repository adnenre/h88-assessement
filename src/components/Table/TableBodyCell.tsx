import React from 'react'

type tableCellProps = {
    children : React.ReactNode
}
const TableBodyCell = ({children,...rest}:tableCellProps) => {
  return (
    <td className='w-1/2 px-5 py-5 border-b border-gray-200 bg-white dark:bg-gray-700 text-sm text-center' {...rest}>
       <p className="text-gray-900 whitespace-no-wrap dark:text-white">{children}</p>
    </td>
  )
}

export default TableBodyCell