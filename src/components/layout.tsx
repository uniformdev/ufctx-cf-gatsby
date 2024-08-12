import * as React from "react"
import { Slice } from "gatsby"
import { UniformContext } from "@uniformdev/context-react"
import { createUniformContext } from "../lib/uniform/uniformContext"

import "../styles.css"

interface LayoutProps {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <UniformContext
      context={createUniformContext()}
      outputType={process.env.NODE_ENV === "development" ? "standard" : "edge"}
      includeTransferState="always"
    >
      <Slice alias="header" />
      {children}
      <Slice alias="footer" />
    </UniformContext>
  )
}

export default Layout
