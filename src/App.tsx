import { useState, Suspense, useEffect } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LoadingSpinner } from './components/LoadingSpinner';
import { SEOHead } from './components/SEOHead';
import { ProductionCheck } from './components/ProductionCheck';
import { DefaultAnalytics, trackEvent, trackPageView } from './components/Analytics';
import { LandingPage } from './components/LandingPage';
import { RegistrationForm } from './components/RegistrationForm';
import { SuccessPage } from './components/SuccessPage';
import { TelegramSubscription } from './components/TelegramSubscription';
import { CompletionPage } from './components/CompletionPage';
import { AdminPanel } from './components/AdminPanel';

type Page = 'landing' | 'registration' | 'success' | 'telegram' | 'completion' | 'admin';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [registeredUser, setRegisteredUser] = useState<{ name: string; phone: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Track page views when page changes
  useEffect(() => {
    trackPageView(`${currentPage.charAt(0).toUpperCase() + currentPage.slice(1)} Page`);
  }, [currentPage]);

  const handleRegisterClick = () => {
    trackEvent('register_button_click', { page: 'landing' });
    setCurrentPage('registration');
  };

  const handleFormSubmit = async (data: { name: string; phone: string }) => {
    setIsLoading(true);
    trackEvent('registration_started', { name: data.name });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setRegisteredUser(data);
      setCurrentPage('success');
      
      // Track successful registration
      trackEvent('registration_completed', { 
        name: data.name, 
        phone_provided: !!data.phone 
      });
      
      // Here you could send the data to a backend service
      console.log('User registered:', data);
    } catch (error) {
      console.error('Registration error:', error);
      trackEvent('registration_failed', { error: error?.toString() });
      // Handle error - could show error message
    } finally {
      setIsLoading(false);
    }
  };

  const handleTelegramNext = () => {
    trackEvent('telegram_redirect_click');
    setCurrentPage('telegram');
  };

  const handleTelegramComplete = () => {
    trackEvent('telegram_subscription_completed');
    setCurrentPage('completion');
  };

  const handleBackToLanding = () => {
    setCurrentPage('landing');
  };

  const handleContactAdmin = () => {
    trackEvent('contact_admin_click');
    // In a real app, this could open a chat widget or navigate to contact page
    alert('Admin bilan bog\'lanish: Telegram @admin_username yoki telefon: +998901234567');
  };

  const handleAdminAccess = () => {
    setCurrentPage('admin');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'landing':
        return (
          <LandingPage 
            onRegisterClick={handleRegisterClick}
            onContactAdmin={handleContactAdmin}
            onAdminAccess={handleAdminAccess}
          />
        );
      case 'registration':
        return (
          <RegistrationForm 
            onSubmit={handleFormSubmit}
            onBack={handleBackToLanding}
          />
        );
      case 'success':
        return registeredUser ? (
          <SuccessPage 
            userData={registeredUser}
            onBackToHome={handleBackToLanding}
            onNext={handleTelegramNext}
          />
        ) : null;
      case 'telegram':
        return registeredUser ? (
          <TelegramSubscription
            userData={registeredUser}
            onBackToHome={handleBackToLanding}
            onComplete={handleTelegramComplete}
          />
        ) : null;
      case 'completion':
        return registeredUser ? (
          <CompletionPage
            userData={registeredUser}
            onBackToHome={handleBackToLanding}
          />
        ) : null;
      case 'admin':
        return (
          <AdminPanel 
            onBack={handleBackToLanding}
          />
        );
      default:
        return null;
    }
  };

  // Show loading spinner during form submission
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 flex items-center justify-center">
        <div className="text-center">
          <LoadingSpinner size="lg" text="Ma'lumotlar saqlanmoqda..." />
          <p className="mt-4 text-pink-600">Iltimos, kuting...</p>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <SEOHead />
      <DefaultAnalytics />
      <ProductionCheck />
      <Suspense fallback={
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 flex items-center justify-center">
          <LoadingSpinner size="lg" text="Sahifa yuklanmoqda..." />
        </div>
      }>
        <div className="min-h-screen">
          {renderCurrentPage()}
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}