import React from 'react'
import './SidebarOption.css'

const SidebarOption = ({ Icon, text }) => {
  return (
    <div className="sidebar-option">
      <Icon />
      <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption