import React from 'react'
import './Main.css'
import Left from './Left'
import Right from './Right'

export default function Main() {
  return (
    <div className='body d-flex'>
      <div className="leftSection col-2">
        <Left></Left>
      </div>
      <div className="rightSection col-10 ">
        <Right></Right>
      </div>
    </div>
  )
}
