import { Button } from "../ui/button";

interface CTASectionProps {
  onRegisterClick: () => void;
}

export function CTASection({ onRegisterClick }: CTASectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="space-y-8">
          <div className="bg-white rounded-3xl shadow-2xl p-12 border border-orange-200">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Hozir ro'yhatdan o'ting va sovg'alarni oling!
              </h2>
              
              <Button 
                onClick={onRegisterClick}
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-12 py-6 text-2xl rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse"
              >
                Ro'yhatdan o'tish
              </Button>
              
              <div className="space-y-4">
                <p className="text-yellow-800 text-xl">
                  <span className="animate-pulse">⏰</span> SHOSHILING! Joylar soni cheklangan
                </p>
                <p className="text-gray-600">
                  Har kuni faqat 100 ta joy mavjud
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
