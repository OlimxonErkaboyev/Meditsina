import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { expertInfo } from "../../constants/landingPageData";

export function ExpertSection() {
  return (
    <Card className="bg-white/90 backdrop-blur-lg shadow-2xl border-0 mb-12 overflow-hidden">
      <div className="bg-gradient-to-r from-pink-500 to-rose-500 h-2"></div>
      <CardContent className="p-8">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="relative">
            <div className="w-40 h-40 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full flex items-center justify-center shadow-xl">
              <span className="text-5xl">👩‍⚕️</span>
            </div>
            <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl">
              ✓
            </div>
          </div>
          
          <div className="flex-1 text-center lg:text-left">
            <Badge className="bg-blue-100 text-blue-800 mb-4">
              SERTIFIKATLANGAN MUTAXASSIS
            </Badge>
            <h3 className="text-2xl mb-4 text-gray-800">
              {expertInfo.name}
            </h3>
            <p className="text-gray-600 mb-6">
              {expertInfo.description}
            </p>
            
            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border border-red-200">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="text-center">
                  <span className="text-4xl line-through text-red-500 block">{expertInfo.originalPrice}</span>
                  <span className="text-sm text-red-600">Odatdagi narx</span>
                </div>
                <div className="text-6xl text-red-400 hidden sm:block">→</div>
                <div className="text-center">
                  <span className="text-5xl bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-2xl block shadow-lg">
                    {expertInfo.currentPrice}
                  </span>
                  <span className="text-sm text-green-600 mt-2 block">Bugun uchun</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}