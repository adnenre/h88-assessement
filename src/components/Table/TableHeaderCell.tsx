import React from 'react'

type tableCellProps = {
    children : React.ReactNode
}
const TableHeaderCell = ({children,...rest}:tableCellProps) => {
  return (
    <th className='sticky top-0 px-5 py-5 bg-blue-500 text-white border-b dark:border-gray-500 border-gray-200  text-left text-sm uppercasefont-semibold dark:bg-gray-800 dark:text-white text-center' {...rest}>{children}</th>
  )
}

export default TableHeaderCell