import React from 'react';
import { Button } from './ui/button';
import { isDevelopment } from '../utils/env';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-50 p-4 flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 max-w-md text-center border border-red-200">
            <div className="text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl text-red-800 mb-4">
              Xatolik yuz berdi
            </h2>
            <p className="text-red-600 mb-6">
              Sahifani yangilashga harakat qiling yoki keyinroq qayta urinib ko'ring.
            </p>
            <Button 
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-white px-8 py-3 rounded-2xl"
            >
              Sahifani yangilash
            </Button>
            {isDevelopment() && this.state.error && (
              <details className="mt-4 text-left">
                <summary className="cursor-pointer text-sm text-gray-600">
                  Texnik ma'lumotlar
                </summary>
                <pre className="mt-2 text-xs text-gray-500 whitespace-pre-wrap">
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}