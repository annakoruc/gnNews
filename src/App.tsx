import "./styles/App.scss";
import { Footer, Navbar } from "./components";
import { CountryNews, HomePage, NotFoundPage } from "./pages";
import { Route, Routes } from "react-router-dom";

import { countries } from "./config/countries";

function App() {
  const countryName = "POLAND";

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
