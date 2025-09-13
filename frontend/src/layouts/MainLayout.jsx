import { Outlet } from "react-router-dom";
import { useState } from "react";

import AsideMenu from "../components/layout/AsideMenu/AsideMenu";
import MenuButton from "../components/layout/MenuButton/MenuButton";

export default function MainLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <MenuButton onClick={() => setIsMenuOpen(true)}/>
      <AsideMenu isMenuOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}/>
      <main>
        <Outlet />
      </main>
    </>
  );
}
