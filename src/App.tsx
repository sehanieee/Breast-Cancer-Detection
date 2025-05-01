import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";
import InputPage from "./components/InputPage";
import ResultsPage from "./components/ResultsPage";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <NavigationBar />
        <main className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/input" element={<InputPage />} />
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
          {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        </main>
      </>
    </Suspense>
  );
}

export default App;
