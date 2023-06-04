import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { Container } from "./App.styled";
import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import HistoryPage from "../pages/HistoryPage/HistoryPage.js";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const CartPage = lazy(() => import("../pages/CartPage/CartPage"));
const HistoryPage = lazy(() => import("../pages/HistoryPage/HistoryPage"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
        <ToastContainer />
      </Container>
    </Suspense>
  );
}

export default App;
