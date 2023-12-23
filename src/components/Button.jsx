import React from "react"
import './button.css'

function Button(props) {
    return (
        <button className="button"
            onClick={() => props.click(props.number)}>
            {props.number}
        </button>
    )
}

export default Button