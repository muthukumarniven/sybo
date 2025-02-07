import React from 'react'
import Images from '../assets/Images'

const Button = ({ imageSrc, onClick, backgroundColor = "#76BEE9", imgWidth="17px", imgHeight="17px", buttonWidth="46px", buttonHeight="46px" }) => {
    return (
        <>
            <button
            onClick={onClick}
             style={{
                width: buttonWidth,
                height: buttonHeight,
                flexShrink: 0,
                fontSize: '15px',
                fontWeight: '700',
                lineHeight: '1',
                // background: '#76BEE9',
                borderRadius: '50%',
                border: "none",
                backgroundColor: backgroundColor
            }}>
                <img style={{width: imgWidth, height: imgHeight}} src={imageSrc} alt="button icon" />
                </button>
        </>
    )
}

export default Button