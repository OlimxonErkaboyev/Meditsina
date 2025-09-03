import { Button } from "../ui/button";

interface FooterSectionProps {
  onRegisterClick: () => void;
  onContactAdmin: () => void;
}

export function FooterSection({ onRegisterClick, onContactAdmin }: FooterSectionProps) {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Hali ham shubhalanayapsizmi?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Minglab ayollar bu marafon orqali o'z muammolarini hal qilishdi. 
              Siz ham ularning qatoriga qo'shiling!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={onRegisterClick}
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-12 py-6 text-2xl rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Ro'yhatdan o'tish
            </Button>
            
            <Button 
              onClick={onContactAdmin}
              variant="outline"
              className="border-pink-400 text-pink-300 hover:bg-pink-50 hover:text-pink-600 transform hover:scale-105 transition-all duration-300"
            >
              Admin bilan bog'lanish
            </Button>
          </div>
          
          <div className="pt-8 border-t border-gray-700">
            <p className="text-gray-400">
              © 2024 Siydik Tutib Tura Olmaslik Marafoni. Barcha huquqlar himoyalangan.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
