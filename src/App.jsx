import { Suspense } from "react";
import { useBootstrapQuery } from "./useBootstrapQuery.js";
import ExcelPortfolio from "./ExcelPortfolio";
import {AppLoader} from "./AppLoader.jsx";

function AppContent() {
  useBootstrapQuery(); // ⬅ blocks rendering
  return <ExcelPortfolio />;
}

export default function App() {
  return (
    <Suspense fallback={<AppLoader />}>
      <AppContent />
    </Suspense>
  );
}
