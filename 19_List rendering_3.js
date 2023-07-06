//NameList.js file
import React from 'react'
import Person from './Person'
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
        name: 'Dakshina',
        age: 15,
        skill: 'Full stack developer',
        id: '1329'
      }
    ]
    const personList = persons.map(person => <Person person={person}/>)
  return (
    <div>
      {personList}
    </div>
  )
}

export default NameList


//Person.js file
import React from 'react'

function Person({person}) {
  return (
    <div>
      <h1>
      I am {person.name}. I am {person.skill} and My age is {person.age}
      </h1>
    </div>
  )
}

export default Person
