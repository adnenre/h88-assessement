import React from 'react';
type loadingProps = {
    children: React.ReactNode;
};
const Loading = ({ children }: loadingProps) => {
    return (
        <div className="w-full h-screen flex bg-black text-white">
            <div className="m-auto">
                <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
                <p data-testid="loading-test">{children}</p>
            </div>
        </div>
    );
};

export default Loading;
