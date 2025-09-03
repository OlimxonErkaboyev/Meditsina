import { useEffect, useState } from 'react';
import config from '../config/production';
import { isDevelopment, isProduction } from '../utils/env';
import { getGoogleAnalyticsId, getYandexMetricaId } from './Analytics';

export function ProductionCheck() {
  const [checks, setChecks] = useState<Array<{name: string, status: boolean, message: string}>>([]);

  useEffect(() => {
    if (isDevelopment()) {
      const performChecks = () => {
        const checkResults = [];

        // Check Telegram URL
        checkResults.push({
          name: 'Telegram Channel URL',
          status: !config.telegramChannelUrl.includes('your_channel'),
          message: config.telegramChannelUrl.includes('your_channel') 
            ? 'Update with real Telegram channel URL' 
            : 'Telegram URL configured'
        });

        // Check contact info
        checkResults.push({
          name: 'Contact Phone',
          status: !config.contact.phone.includes('901234567'),
          message: config.contact.phone.includes('901234567') 
            ? 'Update with real phone number' 
            : 'Contact phone configured'
        });

        // Check analytics - safely check for analytics IDs at runtime
        try {
          const gaId = getGoogleAnalyticsId();
          const ymId = getYandexMetricaId();
          const hasAnalytics = !!(gaId || ymId);
          
          checkResults.push({
            name: 'Analytics',
            status: hasAnalytics,
            message: !hasAnalytics 
              ? 'Analytics IDs not configured (optional)' 
              : `Analytics configured (GA: ${!!gaId}, YM: ${!!ymId})`
          });
        } catch (error) {
          checkResults.push({
            name: 'Analytics',
            status: false,
            message: 'Analytics check failed (optional feature)'
          });
        }

        // Check environment
        checkResults.push({
          name: 'Production Environment',
          status: isProduction(),
          message: isProduction() 
            ? 'Production mode active' 
            : 'Development mode (normal for testing)'
        });

        setChecks(checkResults);
      };

      performChecks();

      // Show checks in console for development
      console.log('🚀 Production Readiness Check:');
      console.table(checks);
    }
  }, []);

  // Only show in development
  if (isProduction()) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg max-w-sm z-50">
      <h3 className="font-bold text-sm mb-2">🚀 Deploy Readiness</h3>
      <div className="space-y-1 text-xs">
        {checks.map((check, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className={check.status ? '✅' : '❌'}></span>
            <span className={check.status ? 'text-green-300' : 'text-red-300'}>
              {check.name}
            </span>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-400 mt-2">
        Fix ❌ items before production deploy
      </p>
    </div>
  );
}