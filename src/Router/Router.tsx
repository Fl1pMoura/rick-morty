import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../view/pages/Home";
import { Characters } from "../view/pages/Characters";
import { ViewLayout } from "@/view/layouts/ViewLayout";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ViewLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
