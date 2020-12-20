import React, {useState}  from "react";

const Button = (props) => {
    return(
        <div
        onClick={props.handleClick}
        >
            {props.children}
        </div>
    )
}

export default Button;