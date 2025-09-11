import { Route, Routes } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} /> */}
      </Route>
    </Routes>
  );
}
