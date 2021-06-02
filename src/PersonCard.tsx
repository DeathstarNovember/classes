import React from 'react'
import { Person, Pet } from './App'

export const AnimalCard = ({ animal }: { animal: Person | Pet }) => {
  const isPet = 'breed' in animal

  return (
    <div
      style={{
        padding: '10px',
        backgroundColor: isPet ? '#fc7f7f' : '#6ab8f4',
        margin: '10px',
        borderRadius: '10px',
      }}
    >
      <LabeledDetail
        label="Name:"
        detail={animal.name.slice(0, 1).toUpperCase() + animal.name.slice(1)}
      />
      {'breed' in animal ? (
        <LabeledDetail label="Breed:" detail={animal.breed} />
      ) : null}
      <LabeledDetail
        label="Age:"
        detail={animal.age.toString() + ' years old'}
      />
      <LabeledDetail label="Height:" detail={animal.height.toString() + 'm'} />
    </div>
  )
}

const LabeledDetail: React.FC<{ label: string; detail: string }> = ({
  label,
  detail,
}) => {
  return (
    <div style={{ display: 'flex' }}>
      <div>{label}</div>
      <div style={{ marginLeft: '5px' }}>{detail}</div>
    </div>
  )
}
