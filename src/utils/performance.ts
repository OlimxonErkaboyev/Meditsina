// Performance optimization utilities
import React from 'react';

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: number | undefined;
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = window.setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      window.setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Lazy loading helper
export const createLazyComponent = <T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>
) => {
  return React.lazy(importFunc);
};

// Image preloader
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject();
    img.src = src;
  });
};

// Local storage with error handling
export const safeLocalStorage = {
  getItem: (key: string): string | null => {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  
  setItem: (key: string, value: string): boolean => {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch {
      return false;
    }
  },
  
  removeItem: (key: string): boolean => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch {
      return false;
    }
  }
};

// Analytics helpers
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  // Safe analytics tracking
  try {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as any).gtag) {
        (window as any).gtag('event', eventName, properties);
      }
      
      // Facebook Pixel
      if ((window as any).fbq) {
        (window as any).fbq('track', eventName, properties);
      }
    }
  } catch (error) {
    console.warn('Analytics tracking error:', error);
  }
  
  console.log('Event tracked:', eventName, properties);
};

// Form validation helpers
export const validateUzbekPhone = (phone: string): boolean => {
  const cleanPhone = phone.replace(/\D/g, '');
  return /^998\d{9}$/.test(cleanPhone) || /^\d{9}$/.test(cleanPhone);
};

export const validateUzbekName = (name: string): boolean => {
  return name.length >= 2 && /^[a-zA-Zа-яё\s'-]+$/.test(name);
};

// Device detection
export const isMobileDevice = (): boolean => {
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

export const isIOSDevice = (): boolean => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
};