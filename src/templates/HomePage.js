import React from "react"
import { graphql } from "gatsby"
import HomePageTemplate from "./HomePageTemplate"

const HomePage = ({ data: { page, instagram } }) => {
  const {
    title,
    subtitle,
    blurbs,
    featuredImage,
    prices,
    footer,
  } = page.frontmatter;

	// debugger

  return (
    <HomePageTemplate
      title={title}
      subtitle={subtitle}
      blurbs={blurbs}
      featuredImage={featuredImage}
      prices={prices}
      social={footer.social}
			instagram={instagram}
    />
  )
}

export default HomePage

export const pageQuery = graphql`
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        featuredImage
        blurbs {
          image
          title
          body
        }
        prices {
          category
          entries {
            label
            price
          }
        }
        footer {
          social {
            facebook
            instagram
          }
        }
      }
    }
    instagram: allInstaNode(limit: 3) {
      edges {
        node {
          id
          likes
          comments
          mediaType
          preview
          original
          timestamp
          caption
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`
