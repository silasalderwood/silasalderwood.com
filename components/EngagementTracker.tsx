"use client";

import { useEffect } from "react";
import { usePageEngagement } from "@/hooks/useAnalytics";
import { trackEvent } from "@/lib/analytics";

/**
 * Keeps the existing Google Analytics engagement tracking alive now that the
 * page itself is a server component.
 */
export function EngagementTracker() {
  usePageEngagement();

  useEffect(() => {
    trackEvent("content_view", {
      event_category: "engagement",
      content_type: "homepage",
    });
  }, []);

  return null;
}
