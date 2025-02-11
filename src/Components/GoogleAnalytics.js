import { useEffect } from 'react';
import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = 'G-QY2LL1BM4R';

let initialized = false;

// function initializeGA() {
//   if (!initialized) {
//     ReactGA.initialize(GA_MEASUREMENT_ID);
//     initialized = true;
//   }
// }

export function GoogleAnalytics() {
//   useEffect(() => {
//     initializeGA();
//   }, []);

  const trackPageView = (path) => {
    // if (!initialized) return;
    ReactGA.send({ hitType: 'pageview', page: path });
  };

  const trackEvent = ({ action, category, label, value }) => {
    // if (!initialized) return;
    ReactGA.event({
      action,
      category,
      label,
      value,
    });
  };

  return { trackPageView, trackEvent };
}
