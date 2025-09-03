import { Button } from "./ui/button";
import { CheckCircle, MessageCircle, Calendar, Gift } from "lucide-react";

interface CompletionPageProps {
  userData: { name: string; phone: string };
  onBackToHome: () => void;
}

export function CompletionPage({ userData, onBackToHome }: CompletionPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-4 relative overflow-hidden">
      {/* Celebration background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            {['🎉', '🎊', '✨', '🌟', '💫', '🏆', '🎯', '👏'][Math.floor(Math.random() * 8)]}
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 mt-8 border border-emerald-200 overflow-hidden">
          {/* Success animation */}
          <div className="relative mb-8">
            <div className="text-8xl mb-4 animate-bounce">🎉</div>
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <div className="w-40 h-40 bg-emerald-200 rounded-full animate-ping"></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
            MUKAMMAL! 🏆
          </h1>
          
          {/* Confirmation message */}
          <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-3xl p-8 mb-8 border-2 border-emerald-300">
            <div className="flex items-center justify-center gap-4 mb-6">
              <CheckCircle className="text-emerald-600" size={48} />
              <div className="text-left">
                <h2 className="text-3xl text-emerald-800 mb-2">
                  Siz muvaffaqiyatli ro'yhatdan o'tdingiz!
                </h2>
                <p className="text-xl text-emerald-700">
                  {userData.name}, 3 kunlik marafonga xush kelibsiz! 🚀
                </p>
              </div>
            </div>
          </div>

          {/* What happens next - Enhanced */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 mb-8 border-2 border-blue-300">
            <h3 className="text-3xl text-blue-800 mb-6 flex items-center justify-center gap-3">
              <Calendar className="text-blue-600" size={36} />
              KEYINGI QADAMLAR
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/70 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">📱</div>
                <h4 className="text-lg text-blue-800 mb-2">15 daqiqa ichida</h4>
                <p className="text-blue-700">SMS tasdiq xabari</p>
              </div>
              <div className="bg-white/70 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">💬</div>
                <h4 className="text-lg text-blue-800 mb-2">1 soat ichida</h4>
                <p className="text-blue-700">WhatsApp guruhiga qo'shilasiz</p>
              </div>
              <div className="bg-white/70 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="text-lg text-blue-800 mb-2">Ertaga 19:00</h4>
                <p className="text-blue-700">Marafon boshlanadi</p>
              </div>
            </div>
          </div>

          {/* Premium benefits */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 mb-8 border-2 border-purple-300">
            <h3 className="text-3xl text-purple-800 mb-6 flex items-center justify-center gap-3">
              <Gift className="text-purple-600" size={36} />
              SIZ OLASIZ
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white/70 rounded-2xl p-4">
                  <span className="text-2xl">📚</span>
                  <div className="text-left">
                    <h4 className="text-purple-800">3 kunlik BEPUL marafon</h4>
                    <p className="text-purple-600 text-sm">Professional dastur</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/70 rounded-2xl p-4">
                  <span className="text-2xl">📄</span>
                  <div className="text-left">
                    <h4 className="text-purple-800">PDF materiallar</h4>
                    <p className="text-purple-600 text-sm">Amaliy qo'llanma</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white/70 rounded-2xl p-4">
                  <span className="text-2xl">👨‍⚕️</span>
                  <div className="text-left">
                    <h4 className="text-purple-800">Ekspert maslahatlar</h4>
                    <p className="text-purple-600 text-sm">Professional yordam</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/70 rounded-2xl p-4">
                  <span className="text-2xl">🎁</span>
                  <div className="text-left">
                    <h4 className="text-purple-800">Maxsus sovg'alar</h4>
                    <p className="text-purple-600 text-sm">Qimmatbaho bonuslar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Telegram reminder */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-6 mb-8 border border-cyan-200">
            <div className="flex items-center justify-center gap-4">
              <MessageCircle className="text-cyan-600" size={32} />
              <div className="text-left">
                <h4 className="text-xl text-cyan-800">Telegram kanalini kuzatib boring!</h4>
                <p className="text-cyan-700">Barcha yangiliklar va materiallar u yerda bo'ladi</p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="space-y-6">
            <Button 
              onClick={onBackToHome}
              className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-12 py-4 text-xl rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              🏠 Bosh sahifaga qaytish
            </Button>
            
            <div className="bg-yellow-50 rounded-2xl p-4 border border-yellow-200">
              <p className="text-yellow-800 text-lg">
                📱 Telefoningizni yonida qoldiring - tez orada aloqa qilamiz!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}