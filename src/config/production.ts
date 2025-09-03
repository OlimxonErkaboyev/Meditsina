import { getEnvVar, isProduction, isBrowser } from '../utils/env';

// Production configuration
export const config = {
  // API URLs
  apiUrl: getEnvVar('REACT_APP_API_URL', 'https://api.soglik-seminari.uz'),
  
  // Telegram settings
  telegramBotUrl: getEnvVar('REACT_APP_TELEGRAM_BOT_URL', 'https://t.me/soglik_seminari_bot'),
  telegramChannelUrl: getEnvVar('REACT_APP_TELEGRAM_CHANNEL_URL', 'https://t.me/soglik_seminari_official'),
  
  // Analytics - will be set at runtime by Analytics component
  googleAnalyticsId: undefined as string | undefined,
  yandexMetricaId: undefined as string | undefined,
  facebookPixelId: getEnvVar('REACT_APP_FB_PIXEL_ID'),
  
  // Feature flags
  features: {
    enableAnalytics: isProduction(),
    enableTelegram: true,
    enableWhatsApp: getEnvVar('REACT_APP_WHATSAPP_ENABLED') === 'true',
    enableSMS: getEnvVar('REACT_APP_SMS_ENABLED') === 'true',
  },
  
  // Contact information
  contact: {
    phone: '+998901234567',
    email: 'info@soglik-seminari.uz',
    telegramSupport: '@soglik_seminari_support',
  },
  
  // Branding
  branding: {
    siteName: 'Ayollar Sog\'ligi Seminari',
    siteDescription: '3 kunlik bepul marafon - Ayollar sog\'ligi va farovonligi uchun',
    siteUrl: 'https://soglik-seminari.uz',
    logoUrl: '/logo.png',
  }
};

// Safe validation only in browser
if (isBrowser && isProduction()) {
  if (config.features.enableAnalytics && !config.googleAnalyticsId && !config.yandexMetricaId) {
    console.info('Analytics services not configured - this is optional');
  }
  
  if (config.telegramChannelUrl.includes('your_channel')) {
    console.warn('Update Telegram channel URL in production');
  }
}

export default config;