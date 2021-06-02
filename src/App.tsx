import React, { useEffect, useState } from 'react'
import { AnimalCard } from './PersonCard'

export type Person = {
  name: string
  age: number
  weight: number
  height: number
}

export type Pet = {
  name: string
  age: number
  weight: number
  height: number
  breed: string
}

type Data = { people: Person[]; pets: Pet[] }

const sampleData: Data = {
  people: [
    {
      name: 'john',
      age: 37,
      weight: 100,
      height: 1.08,
    },
    {
      name: 'andrew',
      age: 33,
      weight: 83,
      height: 0.97,
    },
    {
      name: 'matt',
      age: 41,
      weight: 102,
      height: 1.1,
    },
  ],
  pets: [
    {
      name: 'george',
      age: 2,
      weight: 100,
      height: 0.25,
      breed: 'GSD',
    },
    {
      name: 'beau',
      age: 13,
      weight: 100,
      height: 0.97,
      breed: 'Doberman',
    },
    {
      name: 'wennie',
      age: 1,
      weight: 55,
      height: 1,
      breed: 'Retriever',
    },
  ],
}

export const App = () => {
  const [peopleToDisplay, setPeopleToDisplay] = useState<Person[]>([])

  useEffect(() => {
    if (sampleData.people) {
      const tallPeople = sampleData.people.filter((person) => {
        return person.height >= 1
      })

      setPeopleToDisplay(tallPeople)
    }
  }, [sampleData.people])

  const allAnimalsToDisplay = [...sampleData.pets, ...peopleToDisplay]

  return (
    <div>
      {allAnimalsToDisplay?.map((animal) => {
        return <AnimalCard animal={animal} />
      })}
    </div>
  )
}

export default App
