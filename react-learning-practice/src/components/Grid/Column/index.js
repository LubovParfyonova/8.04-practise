import React from 'react';

const Column = (props) => {
    const {colNum, children} = props;
    return (
        <div>
            {children}
        </div>
    );
}

export default Column;
