import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TrpcProvider } from "./lib/trpc";
import { AllIdeasPage } from "./pages/AllIdeasPage";
import { ViewIdeaPage } from "./pages/ViewIdeaPage";
import {
  getAllIdeasPage,
  getViewIdeaRoute,
  viewIdeaRouteParams,
} from "./lib/routes";

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route path={getAllIdeasPage()} element={<AllIdeasPage />} />
          <Route
            path={getViewIdeaRoute(viewIdeaRouteParams)}
            element={<ViewIdeaPage />}
          />
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  );
};
