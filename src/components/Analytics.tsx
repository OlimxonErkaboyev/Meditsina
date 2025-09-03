import { useEffect } from 'react';
import { isBrowser } from '../utils/env';

// Google Analytics types
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    ym: (...args: any[]) => void;
  }
}

interface AnalyticsProps {
  gaId?: string;
  ymId?: string;
}

export function Analytics({ gaId, ymId }: AnalyticsProps) {
  useEffect(() => {
    if (!isBrowser) return;

    // Google Analytics
    if (gaId) {
      loadGoogleAnalytics(gaId);
    }

    // Yandex Metrica
    if (ymId) {
      loadYandexMetrica(ymId);
    }
  }, [gaId, ymId]);

  return null;
}

function loadGoogleAnalytics(gaId: string) {
  try {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: any[]) {
      window.dataLayer.push(args);
    };

    window.gtag('js', new Date());
    window.gtag('config', gaId, {
      page_title: 'Ayollar Sog\'ligi Seminari',
      page_location: window.location.href,
      anonymize_ip: true,
    });

    console.log('Google Analytics loaded:', gaId);
  } catch (error) {
    console.warn('Failed to load Google Analytics:', error);
  }
}

function loadYandexMetrica(ymId: string) {
  try {
    // Yandex Metrica script
    const script = document.createElement('script');
    script.innerHTML = `
      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

      ym(${ymId}, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
      });
    `;
    document.head.appendChild(script);

    // Add noscript tag
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<div><img src="https://mc.yandex.ru/watch/${ymId}" style="position:absolute; left:-9999px;" alt="" /></div>`;
    document.body.appendChild(noscript);

    console.log('Yandex Metrica loaded:', ymId);
  } catch (error) {
    console.warn('Failed to load Yandex Metrica:', error);
  }
}

// Analytics event tracking functions
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (!isBrowser) return;

  try {
    // Google Analytics
    if (window.gtag) {
      window.gtag('event', eventName, parameters);
    }

    // Yandex Metrica
    if (window.ym) {
      const ymId = getYandexMetricaId();
      if (ymId) {
        window.ym(ymId, 'reachGoal', eventName, parameters);
      }
    }

    console.log('Analytics event tracked:', eventName, parameters);
  } catch (error) {
    console.warn('Failed to track analytics event:', error);
  }
};

export const trackPageView = (pageName: string) => {
  if (!isBrowser) return;

  try {
    // Google Analytics
    if (window.gtag) {
      window.gtag('config', getGoogleAnalyticsId() || '', {
        page_title: pageName,
        page_location: window.location.href,
      });
    }

    // Yandex Metrica
    if (window.ym) {
      const ymId = getYandexMetricaId();
      if (ymId) {
        window.ym(ymId, 'hit', window.location.href, {
          title: pageName,
        });
      }
    }

    console.log('Page view tracked:', pageName);
  } catch (error) {
    console.warn('Failed to track page view:', error);
  }
};

// Helper functions to get analytics IDs safely
export const getGoogleAnalyticsId = (): string | undefined => {
  if (!isBrowser) return undefined;
  
  try {
    // Try Vite environment variable first
    const viteGA = (import.meta as any).env?.VITE_GOOGLE_ANALYTICS_ID;
    if (viteGA) return viteGA;
    
    // Fallback to window injected vars
    return (window as any).__ENV__?.REACT_APP_GA_ID;
  } catch {
    return undefined;
  }
};

export const getYandexMetricaId = (): string | undefined => {
  if (!isBrowser) return undefined;
  
  try {
    // Try Vite environment variable first
    const viteYM = (import.meta as any).env?.VITE_YANDEX_METRICA_ID;
    if (viteYM) return viteYM;
    
    // Fallback to window injected vars  
    return (window as any).__ENV__?.REACT_APP_YM_ID;
  } catch {
    return undefined;
  }
};

// Default Analytics component with environment variables
export function DefaultAnalytics() {
  const gaId = getGoogleAnalyticsId();
  const ymId = getYandexMetricaId();

  // Only render if at least one analytics service is configured
  if (!gaId && !ymId) {
    console.info('No analytics services configured');
    return null;
  }

  return <Analytics gaId={gaId} ymId={ymId} />;
}