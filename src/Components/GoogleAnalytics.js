import ReactGA from 'react-ga4';

export function GoogleAnalytics() {
  const trackPageView = (path) => {
    ReactGA.send({ hitType: 'pageview', page: path });
  };

  const trackEvent = ({ action, category, label, value }) => {
    ReactGA.event({
      action,
      category,
      label,
      value,
    });
  };

  return { trackPageView, trackEvent };
}
