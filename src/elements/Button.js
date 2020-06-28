import React from 'react'
import propTypes from 'prop-types'

function Button(props){
    const className = ["button"];
    if (props.isPrimary) className.push("button-primary");
    if (props.isWideMobile) className.push("button-wide-mobile");
    if (props.isSmall) className.push("button-sm");
    if (props.isBlock) className.push("button-block");
    return(
        <React.Fragment>
            <button className={className.join(" ")}>{props.children}</button>
        </React.Fragment>
    )
}

Button.propTypes = {
    isPrimary: propTypes.bool,
    isWideMobile: propTypes.bool,
    isSmall: propTypes.bool,
    isBlock: propTypes.bool
}


export default Button