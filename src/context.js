/*
Con APIContext, creamos un "contexto" para pasar props a los componentes que necesitamos sin tener que pasarlos uno a uno 
y evitando irnos muy robustos creando un estado global con Redux y sus demas funcionalidades.
ApiContext es una forma mas practica de manejo de estado en React
*/

import React, { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = element => {
    setCart([...cart, element])
  }

  return (
    <CartContext.Provider
      value={{
        //proveedor||privider|| del contexto envia a toda nuestra aplicación todo lo que contenga el prop value
        cart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
