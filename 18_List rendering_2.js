//NameList.js file
import React from 'react'

function NameList() {
    const persons = [
      {
        name: 'Prince',
        age: 22,
        skill: 'Cpp developer',
        id: 3364
      },
      {
        name: 'Ailesh',
        age: 22,
        skill: 'SSC cracker',
        id: '0001'
      },
      {
        name: 'Dakshiniyaan',
        age: 22,
        skill: 'Full stack developer',
        id: '1329'
      }
    ]
    const personList = persons.map(person => 
      <h1>
      I am {person.name}. I am {person.skill} and My age is {person.age}
      </h1>
      )
  return (
    <div>
      {
        personList
      }
    </div>
  )
}

export default NameList


