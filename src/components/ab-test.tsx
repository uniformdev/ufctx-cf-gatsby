import * as React from "react"
import { graphql } from "gatsby"
import { useMemo } from "react"
import * as sections from "../components/sections"
import { Test as UniformTest } from "@uniformdev/context-react"
import { HeroProps as HomepageHero } from "./hero"
import { LogoListProps as HomepageLogoList } from "./logo-list"
import { ProductListProps as HomepageProductList } from "./product-list"
import { SectionProps } from "../components/sections"

export interface ABTestProps {
  listName: string
  unfrmAbTest: {
    testId: string
    name: string
  }
  variants: {
    identifier: string
    distribution: number
    sectionType: string
    component: HomepageHero | HomepageLogoList | HomepageProductList
  }[]
}

export default function ABTest(props: ABTestProps) {
  const testVariants = useMemo(() => {
    return props.variants.map((variant) => ({
      id: variant.identifier,
      testDistribution: variant.distribution,
      type: variant.sectionType,
      ...variant.component,
    }))
  }, [props.variants])

  return (
    <UniformTest
      name={props.unfrmAbTest.testId}
      component={(variant) => {
        const VariantComponent: React.ComponentType<SectionProps> =
        sections[variant.type];
        
        if (!VariantComponent) {
          return null
        }

        return <VariantComponent {...(variant )} />
      }}
      variations={testVariants}
    />
  )
}

export const query = graphql`
  fragment HomepageABTestContent on HomepageABTest {
    id
    listName
    unfrmAbTest {
      testId
      name
    }
    variants {
      identifier
      distribution
      sectionType
      component {
        __typename
        ... on HomepageHero {
          id
          kicker
          heading
          subhead
          text
          links {
            id
            text
            href
          }
          image {
            alt
            gatsbyImageData
          }
        }
        ... on HomepageLogoList {
          id
          text
          logos {
            id
            alt
            image {
              id
              gatsbyImageData
              alt
            }
          }
        }
        ... on HomepageProductList {
          id
          heading
          kicker
          text
          content {
            id
            heading
            text
            image {
              id
              gatsbyImageData
              alt
            }
          }
        }
      }
    }
  }
`
