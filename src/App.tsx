import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageLayout } from "./layouts/PageLayout";
import { Home } from "./pages/Home";
import { Courses } from "./pages/Courses";
import { Gallery } from "./pages/Gallery";
import { PageNotFound } from "./pages/PageNotFound";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
