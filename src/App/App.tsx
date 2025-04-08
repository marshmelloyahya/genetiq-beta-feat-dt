
import { RouterProvider } from "react-router-dom";
import "./Styles/Global.scss";
import Router from "./Routes/Router";
import { ThemeProvider } from '../context/ThemeContext';
import { LanguageProvider } from '../context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <RouterProvider router={Router} />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;