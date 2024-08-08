import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Container,
  Section,
  Flex,
  Box,
  Subhead,
  Kicker,
  Text,
  HomepageImage,
  HomepageLink,
} from "./ui"
import { ABTestButtonList } from "./ab-test-button-list"

export interface FeatureDataProps {
  id: string
  image?: HomepageImage
  kicker?: string
  heading: string
  text: string
  links: HomepageLink[]
}

interface FeatureProps {
  flip: boolean
}

export default function Feature(props: FeatureDataProps & FeatureProps) {
  // Example of coded button variants for A/B testing, can be mixed with content coming from Contentful
  const buttonVariants = [
    {
      identifier: "variantA",
      distribution: 50,
      buttonListProps: {
        links: props.links,
        invertColors: false,
      },
    },
    {
      identifier: "variantB",
      distribution: 50,
      buttonListProps: {
        links: props.links,
        invertColors: true,
      },
    },
  ]

  return (
    <Section padding={4} background="muted">
      <Container>
        <Flex gap={4} variant="responsive">
          <Box width="half" order={props.flip ? 1 : null}>
            {props.image && (
              <GatsbyImage
                alt={props.image.alt}
                image={getImage(props.image.gatsbyImageData)}
              />
            )}
          </Box>
          <Box width="half">
            <Subhead>
              {props.kicker && <Kicker>{props.kicker}</Kicker>}
              {props.heading}
            </Subhead>
            <Text variant="lead">{props.text}</Text>
            <ABTestButtonList variants={buttonVariants} />
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageFeatureContent on HomepageFeature {
    id
    kicker
    heading
    text
    links {
      id
      href
      text
    }
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
