/* eslint-disable no-undef */
import React, { useContext, useEffect, useState } from "react"
import { Link } from "gatsby"
import { Button, StyledCart } from "../styles/components"
import priceFormat from "../utils/priceFormat"
import { CartContext } from "../context"

export default function Cart() {
  const { cart } = useContext(CartContext)
  const [total, setTotal] = useState(0)
  const [stripe, setStripe] = useState()

  const getTotal = () => {
    setTotal(
      cart.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.metadata.price * currentValue.quantity,
        0
      )
    )
  }

  //useEffect es una nueva manera de manejar el estado de los componentes, reemplazando asi a componentDidMount y demás
  useEffect(() => {
    setStripe(
      //Configuración de Stripe
      window.Stripe(process.env.STRIPE_PK, { betas: ["checkout_beta_4"] })
    )
    getTotal()
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    const { error } = await stripe.redirectToCheckout({
      items: cart.map(({ product, quantity }) => ({ product, quantity })),
      successUrl: process.env.SUCCESS_REDIRECT,
      cancelUrl: process.env.CANCEL_REDIRECT,
    })
    if (error) {
      throw error
    }
  }

  return (
    <StyledCart>
      <h2>Carrito de compras</h2>
      <table>
        <tbody>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
          {cart.map(piece => (
            <tr key={piece.name}>
              <td>
                <img src={piece.metadata.img} alt={piece.name} /> {piece.name}
              </td>
              <td>USD {priceFormat(piece.metadata.price)}</td>
              <td>{piece.quantity}</td>
              <td>{priceFormat(piece.quantity * piece.metadata.price)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <div>
          <h3>Subtotal: </h3>
          <small>USD {priceFormat(total)}</small>
        </div>
        <div>
          <Link to="/">
            <Button type="outline">Volver</Button>
          </Link>
          <Button onClick={handleSubmit} disabled={cart.length === 0}>
            Comprar
          </Button>
        </div>
      </nav>
    </StyledCart>
  )
}
