import React from 'react';

type tableRowProps = {
    children: React.ReactNode;
};
const TableRow = ({ children, ...rest }: tableRowProps) => {
    return (
        <tr className="w-1/6 hover:bg-gray-100" {...rest}>
            {children}
        </tr>
    );
};

export default TableRow;
