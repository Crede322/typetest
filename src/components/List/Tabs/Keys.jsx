import React from 'react';

const Keys = ({ width, height, borderRadius, border, marginTop, 
boxShadow, position, text, ruText, leftKey, keyPosition, bgcolor, id}) => {
    const keyStyle = {
        position,
        boxShadow,
        border,
        marginTop,
        borderRadius,
        width,
        height,
        backgroundColor:bgcolor,
        id,
    };
    const leftStyle = {
        left: leftKey,
    }
    const keyPositionStyles = {
        marginTop: keyPosition,
    }

    return (
        <div style={keyStyle}>
            <h2 style={keyPositionStyles}>{text}</h2>
            <h3 style={leftStyle}>{ruText}</h3>
        </div>
    );
};

Keys.defaultProps = {
    borderRadius: '5px',
    width: '60px',
    height: '60px',
    position: 'relative',
    boxShadow: 'rgba(53, 29, 163, 0.0) 0px 54px 55px, rgba(53, 29, 163, 0.24) 0px -12px 30px, rgba(53, 29, 163, 0.30) 0px 4px 6px, rgba(53, 29, 163, 0.15) 0px 12px 13px, rgba(53, 29, 163, 0.15) 0px -3px 5px',
};

export default Keys;