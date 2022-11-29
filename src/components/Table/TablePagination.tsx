import React from 'react';
import uniqueId from '../../utils';

import { useTableContext } from './TableContext';
import { DOTS } from './utils';

const TablePagination = () => {
    const { _rows } = useTableContext();

    const handleNext = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        _rows.next();
    };
    const handlePrev = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        _rows.prev();
    };
    const handleJump = (e: React.MouseEvent<HTMLElement>) => {
        _rows.jump(Number(e.currentTarget.getAttribute('data-pagenumber')));
    };
    const pager = {
        prev: 'relative inline-flex items-center rounded-l-md border border-gray-300 px-2 py-2 text-xs font-medium text-gray-500 h-8 w-8 justify-center',
        dot : '"cursor-not-allowed h-8 w-8 justify-center relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-xs font-medium text-gray-700',
        selected:
            'cursor-default h-8 w-8 justify-center relative z-10 inline-flex items-center  border border-indigo-500 bg-blue-400 px-4 py-2 text-xs font-medium text-white-600 focus:z-20',
        number: 'cursor-pointer h-8 w-8 justify-center relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-xs font-medium text-gray-500 hover:bg-gray-50 focus:z-20',
        next: 'relative inline-flex items-center rounded-r-md border border-gray-300 px-2 py-2 text-xs font-medium text-gray-500 h-8 w-8 justify-center',
        mobile: {
            next: 'cursor-pointer relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50',
            prev: 'cursor-pointer relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50',
        },
    };
    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-2 py-2 sm:px-2">
            <div className="flex flex-1 justify-between sm:hidden">
                {_rows.currentPage !== 1 && (
                    <li onClick={handlePrev} className={pager.mobile.prev}>
                        Previous
                    </li>
                )}
                <p></p>
                {_rows.currentPage !== _rows.maxPage && (
                    <li onClick={handleNext} className={pager.mobile.next}>
                        Next
                    </li>
                )}
            </div>

            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-end">
                <div>
                    <nav
                        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                        aria-label="Pagination"
                    >
                        {_rows.maxPage !== 0 && (
                            <li
                                onClick={handlePrev}
                                className={
                                    _rows.currentPage !== 1
                                        ? pager.prev.concat(
                                              ' cursor-pointer bg-white  hover:bg-gray-50 focus:z-20',
                                          )
                                        : pager.prev.concat(' cursor-not-allowed ')
                                }
                            >
                                <span className="sr-only">Previous</span>
                                <svg
                                    className="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </li>
                        )}
                        {_rows.pageRange()?.map((number) => {
                            if (number === DOTS) {
                                return (
                                    <span
                                        key={uniqueId('dot')}
                                        className={pager.dot}
                                    >
                                        &#8230;
                                    </span>
                                );
                            }

                            return (
                                <li
                                    key={uniqueId('page')}
                                    data-pagenumber={number}
                                    className={
                                        _rows.currentPage === number ? pager.selected : pager.number
                                    }
                                    onClick={handleJump}
                                >
                                    {number}
                                </li>
                            );
                        })}
                        {_rows.maxPage !== 0 && (
                            <li
                                onClick={handleNext}
                                className={
                                    _rows.currentPage !== _rows.maxPage
                                        ? pager.next.concat(
                                              ' cursor-pointer bg-white  hover:bg-gray-50 focus:z-20',
                                          )
                                        : pager.next.concat(' cursor-not-allowed ')
                                }
                            >
                                <span className="sr-only">Next</span>
                                <svg
                                    className="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </li>
                        )}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default TablePagination;
