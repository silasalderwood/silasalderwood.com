/**
 * Google Analytics event tracking utilities
 * Uses the @next/third-parties/google package for event tracking
 */

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

/**
 * Track a custom event in Google Analytics
 * @param eventName - The name of the event
 * @param eventParams - Additional parameters for the event
 */
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, any>
): void {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventParams);
  }
}

/**
 * Track a page view
 * @param url - The URL of the page
 * @param title - Optional page title
 */
export function trackPageView(url: string, title?: string): void {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID || "", {
      page_path: url,
      page_title: title,
    });
  }
}

/**
 * Common event tracking helpers
 */
export const analytics = {
  /**
   * Track a button click
   */
  trackClick: (buttonName: string, location?: string) => {
    trackEvent("click", {
      event_category: "button",
      event_label: buttonName,
      location: location,
    });
  },

  /**
   * Track a link click
   */
  trackLink: (linkUrl: string, linkText?: string) => {
    trackEvent("click", {
      event_category: "link",
      event_label: linkText || linkUrl,
      link_url: linkUrl,
    });
  },

  /**
   * Track a form submission
   */
  trackFormSubmit: (formName: string, success: boolean = true) => {
    trackEvent("form_submit", {
      event_category: "form",
      event_label: formName,
      success: success,
    });
  },

  /**
   * Track a download
   */
  trackDownload: (fileName: string, fileType?: string) => {
    trackEvent("file_download", {
      event_category: "download",
      event_label: fileName,
      file_type: fileType,
    });
  },

  /**
   * Track a share action
   */
  trackShare: (method: string, contentType: string, itemId?: string) => {
    trackEvent("share", {
      event_category: "social",
      method: method,
      content_type: contentType,
      item_id: itemId,
    });
  },

  /**
   * Track a search query
   */
  trackSearch: (searchTerm: string, resultsCount?: number) => {
    trackEvent("search", {
      event_category: "search",
      search_term: searchTerm,
      results_count: resultsCount,
    });
  },
};

