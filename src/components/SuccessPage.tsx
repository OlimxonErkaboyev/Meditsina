import { Button } from "./ui/button";

interface SuccessPageProps {
  userData: { name: string; phone: string };
  onBackToHome: () => void;
  onNext: () => void;
}

export function SuccessPage({ userData, onBackToHome, onNext }: SuccessPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-4 relative overflow-hidden">
      {/* Celebratory background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            {['🎉', '🎊', '✨', '🌟', '💫'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 mt-8 border border-green-200 overflow-hidden">
          {/* Success header animation */}
          <div className="relative mb-8">
            <div className="text-8xl mb-4 animate-bounce">🎉</div>
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <div className="w-32 h-32 bg-green-200 rounded-full animate-ping"></div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            TABRIKLAYMIZ! 🎊
          </h1>
          
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6 mb-8 border border-green-200">
            <p className="text-2xl text-green-800 mb-4">
              SIZ MUVAFFAQIYATLI RO'YHATDAN O'TDINGIZ!
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-left max-w-md mx-auto">
              <div className="flex items-center gap-3">
                <span className="text-2xl">👤</span>
                <div>
                  <div className="text-sm text-green-600">Ism</div>
                  <div className="text-green-800">{userData.name}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📱</span>
                <div>
                  <div className="text-sm text-green-600">Telefon</div>
                  <div className="text-green-800">{userData.phone}</div>
                </div>
              </div>
            </div>
          </div>

          {/* What happens next */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8 border border-blue-200">
            <h3 className="text-2xl text-blue-800 mb-4 flex items-center justify-center gap-2">
              <span className="text-3xl">📞</span>
              KEYINGI QADAMLAR
            </h3>
            <div className="space-y-3 text-blue-700">
              <div className="flex items-center gap-3">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                <p>15 daqiqa ichida sizga SMS keladi</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                <p>WhatsApp guruhiga qo'shilasiz</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                <p>Ertaga 19:00da marafon boshlanadi</p>
              </div>
            </div>
          </div>

          {/* What to expect */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 mb-8 border border-purple-200">
            <h3 className="text-2xl text-purple-800 mb-4 flex items-center justify-center gap-2">
              <span className="text-3xl">🎁</span>
              SIZ OLASIZ
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <span className="text-green-500">✅</span>
                  <span className="text-purple-700">3 kunlik BEPUL marafon</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500">✅</span>
                  <span className="text-purple-700">PDF materiallar</span>
                </div>
              </div>
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <span className="text-green-500">✅</span>
                  <span className="text-purple-700">Ekspert maslahatlar</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500">✅</span>
                  <span className="text-purple-700">Qimmatbaho sovg'alar</span>
                </div>
              </div>
            </div>
          </div>

          {/* Next step teaser */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8 border-2 border-blue-300">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-4xl">📱</span>
              <div className="text-left">
                <h3 className="text-2xl text-blue-800">Oxirgi qadam qoldi!</h3>
                <p className="text-blue-700">Marafonda qatnashish uchun Telegram kanalga obuna bo'ling</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={onNext}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-12 py-4 text-xl rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse"
              >
                📱 Keyingi qadam
              </Button>
              
              <Button 
                onClick={onBackToHome}
                variant="outline"
                className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-4 text-xl rounded-2xl transition-all duration-300"
              >
                🏠 Bosh sahifaga qaytish
              </Button>
            </div>
            
            <p className="text-gray-600 text-sm">
              Telefoning yonida qoldiring - tez orada aloqa qilamiz! 📱
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}