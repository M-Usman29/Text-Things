import React from 'react'

export default function Alerts(props) {
  return (
    props.alert &&  <div className="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>{props.alert.msg}</strong>:{props.alert.typ} 
    {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
  </div>
    
  )
}
