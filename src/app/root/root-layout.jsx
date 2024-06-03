import { Outlet } from "react-router-dom";
import Navbar from "../../components/layout/navbar";
import Footer from "../../components/layout/footer";

export default function RootLayout() {
  return (
    <div>
      <div className="container mx-auto">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
