import React from 'react'

export const SecondComponent = () => {
    let name = 'Pablo'
    let age = 21
    let isAdult = age >= 18
    let isAdultMsg = isAdult ? 'is an adult' : 'is not an adult'
  return (
    <div>
        <p>My name is {name}</p>
        <p>I am {age} years old</p>
        <p>He {isAdultMsg}</p>
    </div>
  )
}
