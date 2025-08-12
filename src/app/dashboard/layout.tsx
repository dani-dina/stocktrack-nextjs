// components/Layout.tsx

import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <nav className="container mx-auto">
          <h1 className="text-xl font-bold">My Next.js App</h1>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 p-4 text-center">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
