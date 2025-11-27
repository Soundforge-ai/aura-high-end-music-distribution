import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import UploadWizard from './components/UploadWizard';
import Financials from './components/Financials';
import Catalog from './components/Catalog';
import ArtistPages from './components/ArtistPages';
import AdminPanel from './components/AdminPanel';
import GeminiStudio from './components/GeminiStudio';
import InteractiveDownload from './components/InteractiveDownload';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Search, Bell, LogOut, Loader2 } from 'lucide-react';

// A layout component for authenticated users
const MainLayout: React.FC = () => {
    const { user, logout } = useAuth();

    return (
        <div className="app-container">
            <Sidebar />
            <main className="main-content">
                {/* Top bar */}
                <div className="top-bar">
                    <div className="search-container group">
                        <Search className="search-icon" size={18} />
                        <input
                            type="text"
                            placeholder="Search catalog, ISRC, or artist..."
                            className="search-input"
                        />
                    </div>
                    <div className="user-section">
                        <button className="notification-btn">
                            <Bell size={20} />
                            <span className="notification-dot"></span>
                        </button>
                        <div className="user-info">
                            <div className="user-details">
                                <p className="user-name">{user?.name}</p>
                                <p className="user-role">
                                    {user?.role === 'admin' ? 'Administrator' :
                                     user?.role === 'artist' ? 'Artiest' : 'Gebruiker'}
                                </p>
                            </div>
                            <div className="user-avatar">
                                <img src="https://picsum.photos/100/100" alt="Profile" />
                            </div>
                            <button
                                onClick={logout}
                                className="ml-3 p-2 text-gray-400 hover:text-white transition-colors"
                                title="Uitloggen"
                            >
                                <LogOut size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Content Area with Fade In */}
                <div className="animate-fade-in-up">
                    <Outlet /> {/* Child routes will render here */}
                </div>

                {/* Background Ambient Effects */}
                <div className="ambient-bg">
                    <div className="ambient-blob blob-1"></div>
                    <div className="ambient-blob blob-2"></div>
                </div>
            </main>
        </div>
    );
};


const AppContent: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth();
  
  // Livestream State (Should be moved to a context later)
  const [isLive, setIsLive] = useState(false);
  const [streamUrl, setStreamUrl] = useState('');
  const [fallbackVideos, setFallbackVideos] = useState<string[]>([
    'Best of 2023 Mix',
    'Label Showcase: Summer Vibes',
    'Artist Spotlight: Neon Dreams'
  ]);
  const [selectedFallbackVideo, setSelectedFallbackVideo] = useState<string | null>('Best of 2023 Mix');

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="animate-spin text-purple-400 mx-auto mb-4" size={48} />
          <p className="text-white text-lg">AURA wordt geladen...</p>
        </div>
      </div>
    );
  }

  return (
      <Routes>
        {/* Authentication Routes */}
        {!isAuthenticated ? (
            <>
                <Route path="/login" element={<Login onSwitchToRegister={() => {}} />} />
                <Route path="/register" element={<Register onSwitchToLogin={() => {}} />} />
                <Route path="*" element={<Navigate to="/login" />} />
            </>
        ) : (
            <Route element={<MainLayout />}>
                <Route path="/dashboard" element={<Dashboard isLive={isLive} streamUrl={streamUrl} fallbackVideo={selectedFallbackVideo} />} />
                <Route path="/upload" element={<UploadWizard />} />
                <Route path="/financials" element={<Financials />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/artist-pages" element={<ArtistPages />} />
                <Route path="/admin" element={
                    <ProtectedRoute requiredRole="admin">
                        <AdminPanel
                            isLive={isLive}
                            setIsLive={setIsLive}
                            streamUrl={streamUrl}
                            setStreamUrl={setStreamUrl}
                            fallbackVideos={fallbackVideos}
                            setFallbackVideos={setFallbackVideos}
                            selectedFallbackVideo={selectedFallbackVideo}
                            setSelectedFallbackVideo={setSelectedFallbackVideo}
                        />
                    </ProtectedRoute>
                } />
                <Route path="/gemini-studio" element={<GeminiStudio />} />
                <Route path="/download" element={<InteractiveDownload />} />
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="*" element={<Navigate to="/dashboard" />} />
            </Route>
        )}
      </Routes>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
