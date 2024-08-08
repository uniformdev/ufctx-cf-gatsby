import {
  Context,
  CookieTransitionDataStore,
  ManifestV2,
  enableContextDevTools,
  enableDebugConsoleLogDrain,
} from "@uniformdev/context"

import manifest from "./uniform-manifest.json"
import { enableAmplitudeAnalytics } from "../amplitude/amplitudeContext"

export function createUniformContext() {
  const plugins = [
    enableContextDevTools(),
    enableDebugConsoleLogDrain("debug"),
    enableAmplitudeAnalytics(),
  ]

  const context = new Context({
    defaultConsent: true,
    manifest: manifest as ManifestV2,
    transitionStore: new CookieTransitionDataStore({}),
    plugins: plugins,
  })

  return context
}
