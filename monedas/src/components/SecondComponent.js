import React from 'react'
import "./test.css"


export const SecondComponent = () => {
    let name = 'Pablo'
    let age = 21
    let isAdult = age >= 18
    let isAdultMsg = isAdult ? 'is an adult' : 'is not an adult'

    let lenguages = ['JavaScript', 'Java', 'C#', 'Python', 'PHP']
  return (
    <div className="bg-blue-500 text-white p-4">
        <p>My name is {name}</p>
        <p>I am {age} years old</p>
        <p>He {isAdultMsg}</p>

        <h2>Lenguages</h2>
        <ul>
            {lenguages.map((lenguage, index) => (
                <li key={index}>{lenguage}</li>
            ))}
        </ul>
    </div>
  )
}
