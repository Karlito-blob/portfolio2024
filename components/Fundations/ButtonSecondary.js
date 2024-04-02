import React from 'react'
import ds from "../../styles/DesignSystem.module.css"


export default function ButtonSecondary(props) {
    return (
        <button className={ds.buttonSecondary} onClick={props.onClick}>
            <p className={ds.buttonTxtPrimary}>
                {props.text}
            </p>
            {props.icon && <props.icon />}
        </button>
    )
}