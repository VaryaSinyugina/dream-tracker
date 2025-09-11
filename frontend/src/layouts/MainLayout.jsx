import { Outlet } from "react-router-dom";

import AsideMenu from "../components/layout/aside-menu/AsideMenu";

export default function MainLayout() {
  return (
    <>
      <AsideMenu />
      <main>
        <Outlet />
      </main>
    </>
  );
}
