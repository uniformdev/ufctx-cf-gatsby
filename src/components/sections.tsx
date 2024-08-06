// Import all the component props
import { HeroProps } from "./hero"
import { FeatureListProps } from "./feature-list"
import { LogoListProps } from "./logo-list"
import { BenefitListProps } from "./benefit-list"
import { TestimonialListProps } from "./testimonial-list"
import { StatListProps } from "./stat-list"
import { CtaProps } from "./cta"
import { ProductListProps } from "./product-list"

import { AboutHeroProps } from "./about-hero"
import { AboutStatListProps } from "./about-stat-list"
import { AboutLeadershipProps } from "./about-leadership"
import { AboutLogoListProps } from "./about-logo-list"
import { ABTestProps } from "./ab-test"

// Map the blocktypes to their respective components
import HomepageHero from "./hero"
import HomepageFeatureList from "./feature-list"
import HomepageLogoList from "./logo-list"
import HomepageBenefitList from "./benefit-list"
import HomepageTestimonialList from "./testimonial-list"
import HomepageStatList from "./stat-list"
import HomepageCta from "./cta"
import HomepageProductList from "./product-list"
import AboutHero from "./about-hero"
import AboutStatList from "./about-stat-list"
import AboutLeadership from "./about-leadership"
import AboutLogoList from "./about-logo-list"
import AbTest from "./ab-test"

// Define the Blocktypes which map to the respective components
type Blocktypes =
  | "HomepageHero"
  | "HomepageFeatureList"
  | "HomepageLogoList"
  | "HomepageBenefitList"
  | "HomepageTestimonialList"
  | "HomepageStatList"
  | "HomepageCta"
  | "HomepageProductList"
  | "AboutHero"
  | "AboutStatList"
  | "AboutLeadership"
  | "AboutLogoList"
  | "AbTest"

// Type definition that combines the block type with the respective props
type WithBlocktype<B = Blocktypes, P = SectionProps> = {
  id: string
  blocktype: B
} & P

const sections = {
  HomepageHero,
  HomepageFeatureList,
  HomepageLogoList,
  HomepageBenefitList,
  HomepageTestimonialList,
  HomepageStatList,
  HomepageCta,
  HomepageProductList,
  AboutHero,
  AboutStatList,
  AboutLeadership,
  AboutLogoList,
  AbTest,
} as const

// Define HomepageBlock as a union type of all possible block components
export type HomepageBlock =
  | WithBlocktype<"HomepageHero", HeroProps>
  | WithBlocktype<"HomepageFeatureList", FeatureListProps>
  | WithBlocktype<"HomepageLogoList", LogoListProps>
  | WithBlocktype<"HomepageBenefitList", BenefitListProps>
  | WithBlocktype<"HomepageTestimonialList", TestimonialListProps>
  | WithBlocktype<"HomepageStatList", StatListProps>
  | WithBlocktype<"HomepageCta", CtaProps>
  | WithBlocktype<"HomepageProductList", ProductListProps>
  | WithBlocktype<"AboutHero", AboutHeroProps>
  | WithBlocktype<"AboutStatList", AboutStatListProps>
  | WithBlocktype<"AboutLeadership", AboutLeadershipProps>
  | WithBlocktype<"AboutLogoList", AboutLogoListProps>
  | WithBlocktype<"AbTest", ABTestProps>


export type SectionTypes = keyof typeof sections
export default sections


// Export all components
export {
  HomepageHero,
  HomepageFeatureList,
  HomepageLogoList,
  HomepageBenefitList,
  HomepageTestimonialList,
  HomepageStatList,
  HomepageCta,
  HomepageProductList,
  AboutHero,
  AboutStatList,
  AboutLeadership,
  AboutLogoList,
  AbTest,
}

// Define the type that encapsulates all possible component props
export type SectionProps =
  | HeroProps
  | FeatureListProps
  | LogoListProps
  | BenefitListProps
  | TestimonialListProps
  | StatListProps
  | CtaProps
  | ProductListProps
  | AboutHeroProps
  | AboutStatListProps
  | AboutLeadershipProps
  | AboutLogoListProps
  | ABTestProps