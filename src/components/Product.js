import React from "react"
import { Link } from "gatsby"
import formatPrice from "../utils/priceFormat"
import { StyledProducts } from "../styles/components"

export default function Products({ products }) {
  return (
    <StyledProducts>
      <h2>Productos</h2>
      <section>
        {products.map(({ node }) => {
          const price = formatPrice(node.metadata.price)
          return (
            <article key={node.id}>
              <img src={node.metadata.img} alt={node.name} />
              <p>{node.name}</p>
              <small>USD {price}</small>
              <Link to={`/${node.id}`}>Comprar ahora</Link>
            </article>
          )
        })}
      </section>
    </StyledProducts>
  )
}
