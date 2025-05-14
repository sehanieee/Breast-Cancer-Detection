import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";
import InputPage from "./components/InputPage";
import ResultsPage from "./components/ResultsPage";
import NavigationBar from "./components/NavigationBar";
import { DiagnosticProvider } from "./context/DiagnosticContext";
import NewsPage from "./components/NewsPage";

function App() {
  return (
    <DiagnosticProvider>
      <Suspense fallback={<p>Loading...</p>}>
        <>
          <NavigationBar />
          <main className="container mx-auto px-4 py-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/input" element={<InputPage />} />
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/news" element={<NewsPage />} />
              {import.meta.env.VITE_TEMPO === "true" && (
                <Route
                  path="/tempobook/*"
                  element={<div>Tempobook Placeholder</div>}
                />
              )}
            </Routes>

            {/* Optional useRoutes if you're dynamically injecting routes */}
            {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
          </main>
        </>
      </Suspense>
    </DiagnosticProvider>
  );
}

export default App;
