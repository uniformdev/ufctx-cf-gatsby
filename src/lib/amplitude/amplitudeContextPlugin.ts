import { ContextPlugin, TestEvent } from "@uniformdev/context"
import * as amplitude from "@amplitude/analytics-browser"

export const enableAmplitudeAnalytics = (): ContextPlugin => {
  return {
    init: (context) => {

      if (typeof window === 'undefined') {
        return () => {};
      }
      
      // Handle emitting test results to Amplitude
      const onTestResult = (result: TestEvent) => {
        amplitude.logEvent("[Uniform] Test Result", {
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
