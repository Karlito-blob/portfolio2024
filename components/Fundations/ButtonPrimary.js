import React from 'react'
import ds from "../../styles/DesignSystem.module.css"


export default function ButtonPrimary(props) {
    return (
        <button className={ds.buttonPrimary} onClick={props.onClick}>
            <p className={ds.buttonTxtPrimary}>
                {props.text}
            </p>
        </button>
    )
}