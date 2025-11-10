"use client";

import { useEffect, useRef } from "react";
import { analytics, trackEvent } from "@/lib/analytics";

/**
 * Hook to track page engagement metrics
 */
export function usePageEngagement() {
  const startTimeRef = useRef<number>(Date.now());
  const maxScrollRef = useRef<number>(0);
  const hasTrackedEngagement = useRef<boolean>(false);

  useEffect(() => {
    // Track page view time after 30 seconds
    const timeTracker = setTimeout(() => {
      const timeOnPage = Math.floor((Date.now() - startTimeRef.current) / 1000);
      trackEvent("page_engagement", {
        event_category: "engagement",
        time_on_page: timeOnPage,
        max_scroll: maxScrollRef.current,
      });
      hasTrackedEngagement.current = true;
    }, 30000);

    // Track scroll depth
    const handleScroll = () => {
      const scrollPercent = Math.round(
        ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100
      );
      maxScrollRef.current = Math.max(maxScrollRef.current, scrollPercent);

      // Track milestones
      if (scrollPercent >= 50 && !hasTrackedEngagement.current) {
        trackEvent("scroll", {
          event_category: "engagement",
          scroll_depth: 50,
        });
      }
      if (scrollPercent >= 90) {
        trackEvent("scroll", {
          event_category: "engagement",
          scroll_depth: 90,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Track initial page load
    trackEvent("page_view", {
      event_category: "page",
      page_title: document.title,
    });

    return () => {
      clearTimeout(timeTracker);
      window.removeEventListener("scroll", handleScroll);

      // Track exit if user leaves before 30 seconds
      if (!hasTrackedEngagement.current) {
        const timeOnPage = Math.floor((Date.now() - startTimeRef.current) / 1000);
        trackEvent("page_exit", {
          event_category: "engagement",
          time_on_page: timeOnPage,
          max_scroll: maxScrollRef.current,
        });
      }
    };
  }, []);
}

/**
 * Hook to easily track custom events
 */
export function useTrackEvent() {
  return {
    trackClick: analytics.trackClick,
    trackLink: analytics.trackLink,
    trackFormSubmit: analytics.trackFormSubmit,
    trackDownload: analytics.trackDownload,
    trackShare: analytics.trackShare,
    trackSearch: analytics.trackSearch,
    trackEvent,
  };
}

