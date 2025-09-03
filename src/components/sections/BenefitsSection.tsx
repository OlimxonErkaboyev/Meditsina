import { Card, CardContent } from "../ui/card";

interface BenefitsSectionProps {
  onRegisterClick: () => void;
}

export function BenefitsSection({ onRegisterClick }: BenefitsSectionProps) {
  const benefitCards = [
    {
      icon: "💪",
      title: "Kegel Mashqlari",
      description: "Siydik tutib tura olmaslik muammosini hal qilish uchun maxsus mashqlar",
      bgFrom: "pink-100",
      bgTo: "rose-100",
      borderColor: "pink-200",
      titleColor: "pink-800"
    },
    {
      icon: "❤️",
      title: "Jinsiy Hayot",
      description: "Jinsiy hayotda zavqni qaytarish va munosabatlarni yaxshilash",
      bgFrom: "red-100",
      bgTo: "pink-100",
      borderColor: "red-200",
      titleColor: "red-800"
    },
    {
      icon: "🏥",
      title: "Tabiiy Yechimlar",
      description: "Dori-darmonlarsiz, tabiiy usullar bilan muammolarni hal qilish",
      bgFrom: "green-100",
      bgTo: "emerald-100",
      borderColor: "green-200",
      titleColor: "green-800"
    },
    {
      icon: "👥",
      title: "Ekspert Maslahat",
      description: "15 yillik tajribaga ega ekspertdan shaxsiy maslahat va yordam",
      bgFrom: "blue-100",
      bgTo: "indigo-100",
      borderColor: "blue-200",
      titleColor: "blue-800"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              3 kunlik BEPUL marafonda siz:
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefitCards.map((benefit, index) => (
              <div key={index}>
                <Card 
                  className={`bg-gradient-to-br from-${benefit.bgFrom} to-${benefit.bgTo} border-${benefit.borderColor} transform hover:scale-105 transition-all duration-300`}
                >
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4 text-center">{benefit.icon}</div>
                    <h3 className={`text-xl mb-3 text-${benefit.titleColor} text-center`}>{benefit.title}</h3>
                    <p className="text-gray-700">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
