import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigation, navigationItems } from './views/Navigation';

function App() {
  return (
    <>
      <div className="text-slate-50 bg-slate-800 flex flex-col h-[100vh] overflow-y-scroll">
        <Routes>
          {Object.values(navigationItems).map(tab => (
            <Route key={tab.path} path={tab.path} element={tab.element} />
          ))}
        </Routes>
      </div>

      <Navigation />
    </>
  );
}

export default App;
