import React from 'react'

type ContainerProps = {
    children: React.ReactNode
}
const Container = ({ children }: ContainerProps) => {
    return (
        <div className="grid h-screen">
            <div className="py-8 bg-gradient-to-l from-cyan-500 to-blue-500 rounded-md grid grid-cols-1  justify-center items-center p-8 shadow text-gray-50 mx-4 md:mx-20 my-6">
                <div className="container mx-auto px-4 sm:px-8 max-w-3xl ">
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div data-testid="container-test" className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container