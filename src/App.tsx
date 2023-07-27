import React from 'react';
import { // For Routing
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import UserForm from './components/FirstPage/UserForm';
import SecondPage from './components/SecondPage/SecondPage';
import "./App.css" 

const App: React.FC = () => {
  return (    
      <Routes>
        {/* First page route */}
        <Route path="/" element={<UserForm />} />
        {/* Second page route */}
        <Route path="/second-page" element={<SecondPage />} />        
      </Routes>
  );
};

export default App;
