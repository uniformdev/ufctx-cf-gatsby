import { ContextPlugin, TestEvent } from "@uniformdev/context"
import * as amplitude from "@amplitude/analytics-browser"

export const enableAmplitudeAnalytics = (): ContextPlugin => {
  return {
    init: (context) => {
      // Handle emitting test results to Amplitude
      const onTestResult = (result: TestEvent) => {
        amplitude.logEvent("Test Result", {
          name: result.name,
          variantId: result.variantId ?? "No Variant",
          variantAssigned: result.variantAssigned,
        })
      }

      context.events.on("testResult", onTestResult)

      return () => {
        context.events.off("testResult", onTestResult)
      }
    },
  }
}
