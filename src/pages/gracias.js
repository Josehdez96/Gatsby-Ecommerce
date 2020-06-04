import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

export default function gracias() {
  return (
    <div>
      <SEO title="Compra exitosa" />
      <Purchase>
        <h2>Compra exitosa</h2>
        <p>¡Espero que disfrutes tu swag!</p>
        <p>¡Te esperamos de vuelta!</p>
        <span role="img" aria-label="emoju">
          ❤
        </span>
        <Link to="/">
          <Button>Volver al catálogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
