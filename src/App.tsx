import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Footer, Navbar } from "./components";
import { CountryNews, HomePage, NotFoundPage } from "./pages";
import countries from "./config/countries";

import "./styles/App.scss";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [i18n]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <>
          {countries.map((country) => (
            <Route
              key={country.code}
              path={`/country/${country.name}`}
              element={<CountryNews code={country.code} />}
            />
          ))}
        </>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
