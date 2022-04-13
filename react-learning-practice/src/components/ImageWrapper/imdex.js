import React from 'react';


const ImageWrapper = (props) => {
    const {width, height, children, ...restProps} = props;

    const inlineStyle = {
        width,
        height
    }
    return (
        <div style={inlineStyle} {...restProps}>
            {children}
        </div>
    );
}

export default ImageWrapper;
