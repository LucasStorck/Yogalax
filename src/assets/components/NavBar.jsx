import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../constants";
import logo from "../images/logo.png";

function NavBar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <div className="sticky top-0 z-50 py-4">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-2xl tracking-tight font-light">YOGALAX</span>
          </div>
          <ul className="text-base hidden lg:flex ml-14 space-x-12 font-light">
            {navItems.map((item, index) => (
              <li key={index} className="">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
          {mobileDrawerOpen && (
            <div className="fixed right-20 flex flex-col lg:hidden mt-16 justify-center items-center">
              <ul className="text-xl tracking-tight">
                {navItems.map((item, index) => (
                  <li key={index} className="py-4 text-black">
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
