import React from 'react';
import PropTypes from 'prop-types'

const FlexContainer = (props) => {
    const {justifyContent, flexDirection, alighItems, children} = props;
    const inlineStyle = {
        width: '1200px',
        display: 'flex',
        justifyContent,
        flexDirection,
        alighItems
    }
    return (
        <div style={inlineStyle}>
            {children}
        </div>
    );
}
FlexContainer.defaultProps = {
    width: '1200px',
    justifyContent: 'row',
    flexDirection: 'flex-start',
    alighItems:'flex-start' 
}
FlexContainer.propTypes = {
    justifyContent: PropTypes.string,
    flexDirection: PropTypes.string,
    alighItems: PropTypes.string
}
export default FlexContainer;
