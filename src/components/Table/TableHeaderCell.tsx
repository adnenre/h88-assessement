import React from 'react';

type tableCellProps = {
    children: React.ReactNode;
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
};
const TableHeaderCell = ({ children, onClick, ...rest }: tableCellProps) => {
    return (
        <th
            onClick={onClick}
            className="w-1/6 cursor-pointer sticky top-0 px-5 py-5 bg-blue-400 hover:bg-blue-300 text-white border-b dark:border-gray-500 border-gray-200  text-left text-sm uppercasefont-semibold dark:bg-gray-800 dark:text-white "
            {...rest}
        >
            <div className="flex">
                <p className="flex m-auto">{children}</p>
            </div>
        </th>
    );
};

export default TableHeaderCell;
