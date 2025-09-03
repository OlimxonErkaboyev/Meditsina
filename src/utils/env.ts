// Safe environment utilities for browser compatibility

export const isBrowser = typeof window !== 'undefined';
export const isServer = !isBrowser;

// Safe environment variable access
export const getEnvVar = (key: string, defaultValue: string = ''): string => {
  if (isBrowser) {
    // In browser, check if environment variables are injected in window or Vite env
    try {
      // First try Vite env variables
      const viteKey = key.replace('REACT_APP_', 'VITE_');
      const viteValue = (import.meta as any).env?.[viteKey];
      if (viteValue) return viteValue;
      
      // Fallback to window injected vars
      return (window as any).__ENV__?.[key] || defaultValue;
    } catch {
      return defaultValue;
    }
  }
  
  // In server/build environment, safely access process.env
  try {
    return (globalThis as any).process?.env?.[key] || defaultValue;
  } catch {
    return defaultValue;
  }
};

// Environment detection
export const isDevelopment = (): boolean => {
  if (isBrowser) {
    return window.location.hostname === 'localhost' || 
           window.location.hostname.startsWith('192.168.') ||
           window.location.hostname === '127.0.0.1';
  }
  
  try {
    return (globalThis as any).process?.env?.NODE_ENV === 'development';
  } catch {
    return false;
  }
};

export const isProduction = (): boolean => {
  if (isBrowser) {
    return !isDevelopment();
  }
  
  try {
    return (globalThis as any).process?.env?.NODE_ENV === 'production';
  } catch {
    return true; // Assume production if we can't determine
  }
};

// Safe analytics detection
export const hasAnalytics = (): boolean => {
  if (!isBrowser) return false;
  
  return Boolean((window as any).gtag || (window as any).fbq);
};

// Safe console logging
export const safeLog = (...args: any[]) => {
  if (typeof console !== 'undefined' && console.log) {
    console.log(...args);
  }
};

export const safeWarn = (...args: any[]) => {
  if (typeof console !== 'undefined' && console.warn) {
    console.warn(...args);
  }
};

export const safeError = (...args: any[]) => {
  if (typeof console !== 'undefined' && console.error) {
    console.error(...args);
  }
};