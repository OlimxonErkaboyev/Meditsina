import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

export function HeroSection() {
  return (
    <div className="text-center mb-12">
      {/* Special Offer Badge */}
      <div className="flex justify-center mb-6">
        <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 text-lg animate-pulse">
          ⚡ CHEGIRMALI TAKLIF - BUGUN OXIRI!
        </Badge>
      </div>
      
      <h1 className="text-4xl md:text-6xl mb-8 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent leading-tight">
        Siydik tutib tura olmaslik muammosidan 
        <span className="block text-orange-500">BUTUNLAY QUTULING!</span>
      </h1>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
        <Card className="bg-white/80 backdrop-blur-sm border-pink-200 transform hover:scale-105 transition-all duration-300">
          <CardContent className="p-6">
            <div className="text-3xl mb-3">😰</div>
            <p className="text-lg text-gray-700">
              Yo'talganingizda yoki aksa urganda siydik chiqib ketadimi?
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-white/80 backdrop-blur-sm border-pink-200 transform hover:scale-105 transition-all duration-300">
          <CardContent className="p-6">
            <div className="text-3xl mb-3">💔</div>
            <p className="text-lg text-gray-700">
              Jinsiy hayotda zavq kamayganmi?
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6 mb-8 border border-green-200">
        <h2 className="text-2xl text-green-800 mb-4">
          ✅ BU MUAMMOLAR ENDI TARIX!
        </h2>
        <p className="text-green-700 text-lg">
          3 kunlik BEPUL marafonda barcha yechimlarni bilib oling
        </p>
      </div>
    </div>
  );
}