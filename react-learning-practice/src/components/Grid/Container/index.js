import React, { Children } from 'react';

const Container = (props) => {
    const inlineStyle = {
        maxwidth: '1200px'
    }
    return (
        <div style={inlineStyle}>
            {props.children}
        </div>
    );
}

export default Container;
