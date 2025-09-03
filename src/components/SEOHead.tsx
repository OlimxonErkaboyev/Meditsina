import { useEffect } from 'react';
import config from '../config/production';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEOHead({
  title = config.branding.siteName,
  description = config.branding.siteDescription,
  image = `${config.branding.siteUrl}/og-image.jpg`,
  url = config.branding.siteUrl,
  type = 'website'
}: SEOHeadProps) {
  
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (property: string, content: string) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`) || 
                   document.querySelector(`meta[name="${property}"]`);
      
      if (metaTag) {
        metaTag.setAttribute('content', content);
      } else {
        metaTag = document.createElement('meta');
        if (property.startsWith('og:') || property.startsWith('twitter:')) {
          metaTag.setAttribute('property', property);
        } else {
          metaTag.setAttribute('name', property);
        }
        metaTag.setAttribute('content', content);
        document.head.appendChild(metaTag);
      }
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', 'ayollar sogligi, ginekolog, kegel mashqlari, siydik tutolmaslik, jinsiy salomatlik, bepul marafon');
    
    // Open Graph tags
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:image', image);
    updateMetaTag('og:url', url);
    updateMetaTag('og:type', type);
    updateMetaTag('og:site_name', config.branding.siteName);
    updateMetaTag('og:locale', 'uz_UZ');
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    
    // Additional SEO tags
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('author', 'Dr. Nodira Karimova');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    
    // Favicon
    let faviconLink = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.rel = 'icon';
      faviconLink.href = '/favicon.ico';
      document.head.appendChild(faviconLink);
    }
    
    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = url;
      document.head.appendChild(canonicalLink);
    } else {
      canonicalLink.href = url;
    }

    // Structured data for healthcare
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      "name": config.branding.siteName,
      "description": description,
      "url": url,
      "image": image,
      "telephone": config.contact.phone,
      "email": config.contact.email,
      "medicalSpecialty": "Gynecology",
      "areaServed": "Uzbekistan",
      "availableLanguage": ["uz", "ru"]
    };

    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.type = 'application/ld+json';
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);

  }, [title, description, image, url, type]);

  return null;
}