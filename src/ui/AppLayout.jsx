import { Outlet } from "react-router-dom";
import Header from "./Header";
import MainNav from "./MainNav";

function AppLayout() {
  return (
    <div>
      <Header />
      <MainNav />
      <Outlet />
    </div>
  );
}

export default AppLayout;
