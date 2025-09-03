import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { LoadingSpinner } from "./LoadingSpinner";

interface RegistrationFormProps {
  onSuccess: (userData: { name: string; phone: string }) => void;
  onBack: () => void;
}

export function RegistrationForm({ onSuccess, onBack }: RegistrationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const validatePhone = (phone: string) => {
    const phoneRegex = /^(\+998|998)?[0-9]{9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ""));
  };

  const validateName = (name: string) => {
    return name.trim().length >= 2;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateName(formData.name)) {
      alert("Iltimos, to'liq ismingizni kiriting");
      return;
    }
    
    if (!validatePhone(formData.phone)) {
      alert("Iltimos, to'g'ri telefon raqamini kiriting (masalan: +998901234567)");
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      onSuccess(formData);
    } catch (error) {
      console.error("Registration error:", error);
      alert("Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 p-4 flex items-center justify-center">
      <div className="w-full max-w-md">
        <Card className="bg-white/90 backdrop-blur-lg shadow-2xl border border-pink-200">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl md:text-3xl text-gray-800">
              Ro'yhatdan o'tish
            </CardTitle>
            <p className="text-gray-600 mt-2">
              Marafonda qatnashish uchun ma'lumotlaringizni kiriting
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-lg text-gray-700">
                  Ismingiz:
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Masalan: Malika Akhmedova"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-4 border-2 border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300 text-lg"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-lg text-gray-700">
                  Telefon raqamingiz:
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Masalan: +998901234567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-4 border-2 border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300 text-lg"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 text-xl rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? <LoadingSpinner size="sm" text="Yuklanmoqda..." /> : "Ro'yhatdan o'tish"}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <Button 
                onClick={onBack}
                variant="outline"
                className="border-pink-300 text-pink-600 hover:bg-pink-50"
              >
                ← Orqaga qaytish
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
