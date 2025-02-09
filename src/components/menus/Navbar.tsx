import { useEffect } from "react";
import { NavbarMenuItem } from "./NavbarMenuItem";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setIsMenuOpen } from "../../redux/reducers/menuReducer";

export const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const isMenuOpen = useAppSelector((state) => state.menu.isOpen);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Daniel Erdos
          </a>

          <div
            className={`w-7 h-6 relative cursor-pointer text-2xl z-40 md:hidden ${
              isMenuOpen ? "opacity-0 transition-opacity" : ""
            }`}
            onClick={() => {
              const prevState = isMenuOpen;
              dispatch(setIsMenuOpen(!prevState));
            }}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavbarMenuItem menuName="Home" />
            <NavbarMenuItem menuName="About" />
            <NavbarMenuItem menuName="Projects" />
            {/*<NavbarMenuItem menuName="Contact" />*/}
            <a
              href="mailto:daniel.erdos87@gmail.com?subject=Inquiry from portfolio site"
              className="text-gray-300 text-4xl hover:text-white transition-colors mb-2"
            >
              &#9993;
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
