import React from 'react'

export default function Alert(props) {
    if (!props.f1) return null;
  return (
    <div>
     <div class={`alert alert-${props.f1.type} alert-dismissible fade show`} role="alert">
  <strong>{props.f1.statement}</strong> 
  
 </div>
    </div>
  )
}

