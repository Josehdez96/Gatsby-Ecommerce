import React, { useContext, useEffect, useState } from "react"
import { Link } from "gatsby"
import { Button, StyledCart } from "../styles/components"
import priceFormat from "../utils/priceFormat"
import { CartContext } from "../context"

export default function Cart() {
  const { cart } = useContext(CartContext)
  const [total, setTotal] = useState(0)

  const getTotal = () => {
    setTotal(
      cart.reduce(
        (accumulator, current) =>
          accumulator + current.metadata.price * current.quantity,
        0
      )
    )
  }

  //useEffect es una nueva manera de manejar el estado de los componentes, reemplazando asi a componentDidMount y demás
  useEffect(() => {
    getTotal()
  }, [])

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
          <Button>Comprar</Button>
        </div>
      </nav>
    </StyledCart>
  )
}
