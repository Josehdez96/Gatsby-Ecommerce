/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { graphql } from "gatsby"

import { Jumbo, SEO, Products } from "../components"

//Siempre debemos exportarlo para que funcione nuestro Query
export const query = graphql`
  query GET_DATA {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
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
`

const IndexPage = ({ data }) => {
  //console.log(data.allSite.edges[0].node.siteMetadata.description) //Util para llegar al dato que necesitamos
  console.log(data.allStripeProduct.edges)
  return (
    <>
      <SEO title="Home" />
      <Jumbo
        description={data.allSite.edges[0].node.siteMetadata.description}
      />
      <Products products={data.allStripeProduct.edges} />
    </>
  )
}

export default IndexPage
