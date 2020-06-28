import React from 'react'
import propTypes from 'prop-types'

function Section(props){
    const className = ['section'];
    className.push(props.className);
    if (props.isCenter) className.push("center-content");

    return(
        <section className={className.join(" ")}>
            {props.children}
        </section> 
    )
}

Section.propTypes = {
    className: propTypes.string,
    isCenter: propTypes.bool
}

export default Section



