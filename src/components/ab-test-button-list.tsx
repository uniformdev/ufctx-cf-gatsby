import * as React from "react"
import { useMemo } from "react"
import { Test as UniformTest } from "@uniformdev/context-react"
import { ButtonList, ButtonListProps } from "./ui"

interface ABTestButtonListProps {
  variants: {
    identifier: string
    distribution: number
    buttonListProps: ButtonListProps
  }[]
}

export function ABTestButtonList({ variants }: ABTestButtonListProps) {
  const testVariants = useMemo(() => {
    return variants.map((variant) => ({
      id: variant.identifier,
      testDistribution: variant.distribution,
      ...variant.buttonListProps,
    }))
  }, [variants])

  return (
    <UniformTest
      name="homepageButtonTest"
      component={(variant) => (
        <ButtonList links={variant.links} reversed={variant.reversed} invertColors={variant.invertColors} />
      )}
      variations={testVariants}
    />
  )
}
