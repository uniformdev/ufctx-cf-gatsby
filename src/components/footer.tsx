import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as ui from "./ui"
import BrandLogo from "./brand-logo"

interface FooterData {
  layout: {
    footer: {
      id: string
      links: ui.HomepageLink[]
      meta: { id: string; href: string; text: string }[]
      copyright: string
      socialLinks: { id: string; service: string; username: string }[]
    }
  }
}

export default function Footer() {
  const data: FooterData = useStaticQuery(graphql`
    query {
      layout {
        footer {
          id
          links {
            id
            href
            text
          }
          meta {
            id
            href
            text
          }
          copyright          
        }
      }
    }
  `)

  const { links, meta, socialLinks, copyright } = data.layout.footer

  return (
    <ui.Box as="footer" paddingY={4}>
      <ui.Container>
        <ui.Flex variant="start" responsive>
          <ui.NavLink to="/">
            <ui.VisuallyHidden>Home</ui.VisuallyHidden>
            <BrandLogo />
          </ui.NavLink>
          <ui.Space />         
        </ui.Flex>
        <ui.Space size={5} />
        <ui.Flex variant="start" responsive>
          <ui.FlexList variant="start" responsive>
            {links &&
              links.map((link) => (
                <li key={link.id}>
                  <ui.NavLink to={link.href}>{link.text}</ui.NavLink>
                </li>
              ))}
          </ui.FlexList>
          <ui.Space />
          <ui.FlexList>
            {meta &&
              meta.map((link) => (
                <li key={link.id}>
                  <ui.NavLink to={link.href}>
                    <ui.Text variant="small">{link.text}</ui.Text>
                  </ui.NavLink>
                </li>
              ))}
          </ui.FlexList>
          <ui.Text variant="small">{copyright}</ui.Text>
        </ui.Flex>
      </ui.Container>
      <ui.Space size={3} />
    </ui.Box>
  )
}
