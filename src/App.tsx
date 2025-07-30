import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";

import AppBar from "./components/AppBar/AppBar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { Loader } from "./components/Loader/Loader";
import { useAppDispatch } from "./components/utils/hooks";
import { clearFilters } from "./redux/filtersSlice";
import { useDispatch } from "react-redux";

const Home = lazy(() => import("./pages/Home/Home"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites"));
const CamperDetails = lazy(() => import("./pages/CamperDetails/CamperDetails"));
const Features = lazy(() => import("./components/Features/Features"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearFilters());
  }, [location.pathname, useAppDispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/catalog/:id" element={<CamperDetails />}>
          <Route index element={<Navigate to="features" replace />} />
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </Suspense>
  );
}

export default App;
