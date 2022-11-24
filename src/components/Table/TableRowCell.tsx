import React from 'react'

type tableRowProps = {
    children : React.ReactNode
}
const TableRow = ({children,...rest}:tableRowProps) => {
  return (
    <tr className='w-64' {...rest}>{children}</tr>
  )
}

export default TableRow