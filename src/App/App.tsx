import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./Styles/Global.scss";
import { ThemeProvider } from '../context/ThemeContext';
import { LanguageProvider } from '../context/LanguageContext';
import { useEffect, Suspense } from "react";
import i18n from "../i18n/i18n";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import all views
import Dashboard from "../Views/Dashboard/Dashboard";
// Import any other view components you need (examples below)
// import DetailView from "../Views/DetailView/DetailView";
// import UserProfile from "../Views/UserProfile/UserProfile";
// import Settings from "../Views/Settings/Settings";

// Loading fallback component
const LoadingFallback = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    Loading...
  </div>
);

function App() {
  // Initialize i18n on app mount with proper language persistence
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage).then(() => {
        document.documentElement.lang = savedLanguage;
        console.log(`Language initialized to: ${savedLanguage}`);
      });
    } else {
      // Set default language based on browser
      const browserLang = navigator.language.substring(0, 2);
      const defaultLang = browserLang === 'fr' ? 'fr' : 'en';
      i18n.changeLanguage(defaultLang).then(() => {
        localStorage.setItem('language', defaultLang);
        document.documentElement.lang = defaultLang;
        console.log(`Default language set to: ${defaultLang}`);
      });
    }
  }, []);

  return (
    <Provider store={store}>
      <LanguageProvider>
        <ThemeProvider>
          <Suspense fallback={<LoadingFallback />}>
            <BrowserRouter>
              <Routes>
                {/* Main dashboard route */}
                <Route path="/dashboard" element={<Dashboard />} />
                
                {/* Example of detail route using parameters */}
                <Route path="/dashboard/:category" element={<Dashboard />} />
                
                {/* Add your other routes here */}
                {/* <Route path="/profile" element={<UserProfile />} /> */}
                {/* <Route path="/settings" element={<Settings />} /> */}
                
                {/* Default route */}
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
              </Routes>
            </BrowserRouter>
            <ToastContainer 
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </Suspense>
        </ThemeProvider>
      </LanguageProvider>
    </Provider>
  );
}

export default App;