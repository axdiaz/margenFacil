import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

export default function EnDesarrollo() {
  return (
    <div>
    <h1>Página en Desarrollo</h1>

      <Link to={"../"}>
        <Button>Home</Button>
      </Link>
    </div>
  )
}
