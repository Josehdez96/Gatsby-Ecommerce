/* eslint-disable no-undef */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

// La gran mayoria de las veces los datos del servidor de GraphiQL vienen de este archivo
module.exports = {
  siteMetadata: {
    title: `Ecommerce`,
    description: `My e-commerce site with Gatsby`,
    author: `Jose Hernandez`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`, //Plugin, nuestros archivos
      options: {
        name: `images`,
        // eslint-disable-next-line no-undef
        path: `${__dirname}/src/images`, //El filesystem de GraphQL toma mi carpeta imagenes
      },
    },
    `gatsby-transformer-sharp`, //Toma las imagenes y las convierte en diferente tipo de imagen (svg por ejemplo)
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    `gatsby-plugin-stripe`, //Pone el API de Stripe disponible en el navegador
    {
      resolve: `gatsby-source-stripe`, //La manera en que yo obtengo mis productos en mi tienda de Stripe
      options: {
        objects: ["Sku", "Product"],
        secretKey: process.env.STRIPE_SK,
        downloadFiles: true,
      },
    },
  ],
}
