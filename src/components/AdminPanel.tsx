import { useState, useEffect } from 'react';
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface Registration {
  id: string;
  name: string;
  phone: string;
  registeredAt: string;
  seminar: string;
  status: string;
}

interface AdminPanelProps {
  onBack: () => void;
}

export function AdminPanel({ onBack }: AdminPanelProps) {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const fetchRegistrations = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-6af2db0f/registrations`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`
        }
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setRegistrations(result.registrations);
      } else {
        setError('Ma\'lumotlarni yuklashda xatolik');
      }
    } catch (err) {
      setError('Server bilan aloqa o\'rnatishda xatolik');
      console.error('Fetch error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('uz-UZ');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Button onClick={onBack} variant="outline">
            ← Orqaga
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Ro'yhatdan o'tganlar</span>
              <Button onClick={fetchRegistrations} variant="outline" size="sm">
                🔄 Yangilash
              </Button>
            </CardTitle>
            <CardDescription>
              Jami ro'yhatdan o'tganlar soni: {registrations.length}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading && (
              <div className="text-center py-8">
                <p>Yuklanmoqda...</p>
              </div>
            )}

            {error && (
              <div className="bg-red-100 border border-red-300 rounded-lg p-4 text-red-700 mb-4">
                {error}
              </div>
            )}

            {!isLoading && !error && registrations.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <p>Hozircha ro'yhatdan o'tganlar yo'q</p>
              </div>
            )}

            {!isLoading && registrations.length > 0 && (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Ism</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Telefon</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Sana</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {registrations.map((registration, index) => (
                      <tr key={registration.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="border border-gray-300 px-4 py-2">{registration.name}</td>
                        <td className="border border-gray-300 px-4 py-2">{registration.phone}</td>
                        <td className="border border-gray-300 px-4 py-2">{formatDate(registration.registeredAt)}</td>
                        <td className="border border-gray-300 px-4 py-2">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                            {registration.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}