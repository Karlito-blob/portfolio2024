import React from 'react'

import ds from "../styles/DesignSystem.module.css"

import Logo from './Logo'
import ButtonPdf from './Fundations/ButtonPdf'

export default function Header() {

  return (
    <div className={ds.header}>
      <Logo />
      <ButtonPdf />
    </div>
  )
}
