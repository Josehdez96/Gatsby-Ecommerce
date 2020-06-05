import React from "react"
import { ProductDetail } from "../components"

export default function Product({ pageContext }) {
  //||pageContext|| es ||node|| enviado desde Gatsby-node (osea, toda la información que recibió mi query)
  return <ProductDetail {...pageContext} /> //Le enviamos como prop TODO el pageContext
}
