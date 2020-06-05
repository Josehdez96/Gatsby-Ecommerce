/* eslint-disable no-undef */
//Generar nuestros propios plugins y crear paginas programaticamente (y asi no repetir código)

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve(`src/templates/Product.js`)
  const result = await graphql(`
    query GET_PRODUCTS {
      allStripeProduct {
        edges {
          node {
            id
            name
            metadata {
              price
              img
              description
              wear
            }
          }
        }
      }
    }
  `)

  if (result.error) {
    throw result.errors
  }

  result.data.allStripeProduct.edges.forEach(({ node }) => {
    //||node|| es cada uno de los productos
    createPage({
      path: `${node.id}`,
      component: productTemplate,
      context: node, //Nos sirve para pasarlo como prop
    })
  })
}
