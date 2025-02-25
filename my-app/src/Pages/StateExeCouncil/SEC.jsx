import React from 'react'
import SECCard from '../../CommonComponent/Navbar/StateExeCommitteeCard'
import "./SEC.css"

function SEC() {
  return (
    <div className= "cardsContainer">
        <SECCard title="Governing Body" />
        <SECCard title="Operations Committee"/>
        <SECCard title="National Program Heads"/>
    </div>
  )
}

export default SEC