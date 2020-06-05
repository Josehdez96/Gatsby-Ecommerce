/* eslint-disable no-undef */
//Este codigo corre en NodeJS

//Utilizamos una pieza de codigo de la API de Gatsby
//Todo lo que yo coloque en este (archivo gatsby-config) element va a encerrar a los elementos o paginas que se generen en mi proyecto

const React = require("react") //Permite usar JSX
const Layout = require("./src/components/layout").default //Traeme el componente por defecto
const { GlobalStyles } = require("./src/styles")
const { CartProvider } = require("./src/context") //Damos acceso al contexto global del carrito de compras

//Todos los export estan en la documentacion de Gatsby
//||element|| son cada una de todas mis paginas
exports.wrapRootElement = ({ element }) => (
  <CartProvider>
    <GlobalStyles />
    <Layout>{element}</Layout>
  </CartProvider>
)
