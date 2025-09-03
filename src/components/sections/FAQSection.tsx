import { Card, CardContent } from "../ui/card";
import { faqData } from "../../constants/landingPageData";

export function FAQSection() {
  return (
    <Card className="bg-white/90 backdrop-blur-lg shadow-xl mb-8">
      <CardContent className="p-8">
        <h3 className="text-2xl mb-6 text-center text-gray-800">
          ❓ Tez-tez so'raladigan savollar
        </h3>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <details key={index} className="group">
              <summary className="cursor-pointer p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg hover:from-pink-100 hover:to-rose-100 transition-all">
                <strong>{faq.question}</strong>
              </summary>
              <p className="p-4 text-gray-700">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}