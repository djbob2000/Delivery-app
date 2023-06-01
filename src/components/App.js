import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { Container } from "./App.styled";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const CartPage = lazy(() => import("../pages/CartPage/CartPage"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Container>
    </Suspense>
  );
}

export default App;
