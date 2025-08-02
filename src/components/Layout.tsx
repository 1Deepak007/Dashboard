import React, { useState, useEffect, useCallback } from 'react';
import { Menu } from 'lucide-react';
import Sidebar from './Sidebar';


const BREAKPOINTS = {
  MOBILE: 768,
} as const;

const SIDEBAR_Z_INDEX = 50;
const OVERLAY_Z_INDEX = 40;

interface LayoutProps {
  children: React.ReactNode;
}

const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(() => {
    // Safe window access with fallback for SSR
    if (typeof window === 'undefined') return true;
    return window.innerWidth < BREAKPOINTS.MOBILE;
  });

  useEffect(() => {
    // Guard against SSR
    if (typeof window === 'undefined') return;

    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < BREAKPOINTS.MOBILE);
      }, 100);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return isMobile;
};

const useSidebar = (isMobile: boolean) => {
  const [sidebarOpen, setSidebarOpen] = useState(() => !isMobile);

  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [isMobile]);

  const closeSidebar = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen(prev => !prev);
  }, []);

  return {
    sidebarOpen,
    setSidebarOpen,
    closeSidebar,
    toggleSidebar,
  };
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isMobile = useResponsive();
  const { sidebarOpen, closeSidebar, toggleSidebar } = useSidebar(isMobile);

  // Handle escape key to close sidebar on mobile
  useEffect(() => {
    if (!isMobile || !sidebarOpen) return;

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeSidebar();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isMobile, sidebarOpen, closeSidebar]);

  useEffect(() => {
    if (isMobile && sidebarOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [isMobile, sidebarOpen]);

  return (
    <div className="flex h-screen bg-gray-100">
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
          style={{ zIndex: OVERLAY_Z_INDEX }}
          onClick={closeSidebar}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              closeSidebar();
            }
          }}
          tabIndex={0}
          role="button"
          aria-label="Close sidebar"
        />
      )}
      
      <div
        className="relative"
        style={{ zIndex: SIDEBAR_Z_INDEX }}
      >
        <Sidebar
          isOpen={sidebarOpen}
          isMobile={isMobile}
          onClose={closeSidebar}
          onToggle={toggleSidebar}
        />
      </div>
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {isMobile && (
          <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle sidebar"
            >
              
              <Menu className="w-6 h-6" />
            </button>
    
              <h2 className='text-xl font-bold'>Test Shop</h2>

            <div className="w-10" />
          </header>
        )}
        
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
