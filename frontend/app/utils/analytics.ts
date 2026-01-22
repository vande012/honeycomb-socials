// Google Analytics event tracking utilities

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

export const GA_MEASUREMENT_ID = 'G-TF3BYFJQFL';

// Track page views
export const pageview = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Common event trackers
export const trackFormSubmission = (formName: string) => {
  event({
    action: 'form_submission',
    category: 'engagement',
    label: formName,
  });
};

export const trackButtonClick = (buttonName: string) => {
  event({
    action: 'button_click',
    category: 'engagement',
    label: buttonName,
  });
};

export const trackOutboundLink = (url: string) => {
  event({
    action: 'outbound_link',
    category: 'engagement',
    label: url,
  });
};

