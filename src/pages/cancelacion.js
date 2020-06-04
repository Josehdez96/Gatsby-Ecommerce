import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

export default function gracias() {
  return (
    <div>
      <SEO title="Compra cancelada" />
      <Purchase>
        <h2>Compra cancelada</h2>
        <p>¡Lo sentimos!</p>
        <p>¡Puedes volver a intentar en 1 hora!</p>
        <Link to="/">
          <Button>Volver al catálogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
