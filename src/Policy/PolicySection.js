import React from 'react'

export default function PolicySection(props) {
  return (
    <div className='policy-section-component'>
      <div className='label'>{props.label}</div>
      <div className='text'>{props.text}</div>
    </div>
  )
}
