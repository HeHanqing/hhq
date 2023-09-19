import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Resume from "./pages/Resume";
import AppLayout from "./ui/AppLayout";
import GlobalStyles from "./styles/GlobalStyles";
import Graphic from "./pages/Graphic";
import Product from "./pages/Product";
import NewMedia from "./pages/NewMedia";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="resume" />} />
          <Route path="resume" element={<Resume />} />
          <Route path="graphic" element={<Graphic />} />
          <Route path="product" element={<Product />} />
          <Route path="newmedia" element={<NewMedia />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
