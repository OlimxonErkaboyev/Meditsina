import { Button } from "./ui/button";
import { ExternalLink, MessageCircle, Users, Calendar } from "lucide-react";
import config from "../config/production";

interface TelegramSubscriptionProps {
  userData: { name: string; phone: string };
  onBackToHome: () => void;
  onComplete: () => void;
}

export function TelegramSubscription({ userData, onBackToHome, onComplete }: TelegramSubscriptionProps) {
  const handleTelegramSubscribe = () => {
    try {
      // Use production config for Telegram URL
      const telegramUrl = config.telegramChannelUrl;
      window.open(telegramUrl, '_blank');
      
      // Track analytics if enabled
      if (config.features.enableAnalytics && typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'telegram_subscription_click', {
          event_category: 'engagement',
          event_label: 'telegram_channel'
        });
      }
      
      // Show success message and proceed to completion
      setTimeout(() => {
        onComplete();
      }, 1500);
    } catch (error) {
      console.error('Error opening Telegram:', error);
      // Fallback: still show completion page
      onComplete();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {['📱', '💬', '🎯', '🔔', '⭐'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 mt-8 border border-blue-200 overflow-hidden">
          {/* Header with Telegram icon */}
          <div className="relative mb-8">
            <div className="text-8xl mb-4 animate-heartbeat">📱</div>
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <div className="w-32 h-32 bg-blue-200 rounded-full animate-ping"></div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            OXIRGI QADAM! 🎯
          </h1>
          
          {/* Welcome message */}
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-6 mb-8 border border-blue-200">
            <p className="text-2xl text-blue-800 mb-4">
              Salom, {userData.name}! 👋
            </p>
            <p className="text-lg text-blue-700">
              3 kunlik marafonga qatnashish uchun quyidagi tugmani bosib 
              yopiq kanalga obuna bo'ling!
            </p>
          </div>

          {/* Main CTA section */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-3xl p-8 mb-8 border-2 border-blue-300">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl text-blue-800 flex items-center justify-center gap-3">
                  <MessageCircle className="text-blue-600" size={40} />
                  3 kunlik marafonga qatnashish
                </h3>
                <p className="text-xl md:text-2xl text-blue-700 font-medium">
                  uchun tepadagi ko'k tugmani bosib yopiq kanalga obuna bo'ling!
                </p>
              </div>

              {/* Main Subscription Button - Centered */}
              <div className="flex flex-col items-center space-y-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-400 rounded-3xl blur-xl opacity-75 animate-pulse"></div>
                  <Button 
                    onClick={handleTelegramSubscribe}
                    className="relative bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-20 py-10 text-3xl rounded-3xl shadow-2xl transform hover:scale-110 transition-all duration-300 animate-heartbeat border-4 border-blue-300 font-bold"
                  >
                    <MessageCircle className="mr-4" size={32} />
                    Obuna bo'lish
                  </Button>
                </div>
                
                <div className="text-center space-y-3">
                  <p className="text-xl text-blue-600 animate-fadeInUp font-bold">
                    ↑ Tepadagi ko'k tugmani bosing! ↑
                  </p>
                  <p className="text-lg text-blue-500 animate-pulse font-medium">
                    3 kunlik marafonga qatnashish uchun
                  </p>
                </div>
              </div>

              {/* Benefits - Below button */}
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="bg-white/70 rounded-2xl p-4 text-center">
                  <Users className="text-blue-500 mx-auto mb-2" size={24} />
                  <span className="text-blue-700 text-sm">Ekskluziv guruh a'zoligi</span>
                </div>
                <div className="bg-white/70 rounded-2xl p-4 text-center">
                  <Calendar className="text-blue-500 mx-auto mb-2" size={24} />
                  <span className="text-blue-700 text-sm">3 kun davomida bepul trening</span>
                </div>
                <div className="bg-white/70 rounded-2xl p-4 text-center">
                  <ExternalLink className="text-blue-500 mx-auto mb-2" size={24} />
                  <span className="text-blue-700 text-sm">PDF materiallar va bonuslar</span>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 mb-8 border border-green-200">
            <h3 className="text-xl text-green-800 mb-4 flex items-center justify-center gap-2">
              <span className="text-2xl">ℹ️</span>
              QO'SHIMCHA MA'LUMOT
            </h3>
            <div className="space-y-3 text-green-700">
              <div className="flex items-center gap-3">
                <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                <p>"Obuna bo'lish" tugmasini bosing</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                <p>Telegram kanalga obuna bo'ling</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                <p>Marafon boshlanishini kuting!</p>
              </div>
            </div>
          </div>

          {/* Speed measurement note */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-4 mb-8 border border-yellow-200">
            <p className="text-yellow-800 flex items-center justify-center gap-2">
              <span className="text-xl">⚡</span>
              <span className="text-sm">Sitespeed o'lchanadi</span>
            </p>
          </div>

          {/* Secondary action buttons */}
          <div className="space-y-6">
            <div className="text-center">
              <Button 
                onClick={onBackToHome}
                variant="outline"
                className="border-2 border-gray-300 text-gray-600 hover:bg-gray-50 px-8 py-3 rounded-2xl transition-all duration-300"
              >
                🏠 Bosh sahifaga qaytish
              </Button>
            </div>
            
            <div className="text-center space-y-2">
              <p className="text-gray-600 text-sm">
                Kanalga obuna bo'lganingizdan so'ng marafon boshlanganda xabar keladi! 🔔
              </p>
              <p className="text-xs text-gray-500">
                Telefon raqamingizni tasdiqlash uchun SMS yuboriladi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}