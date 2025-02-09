import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setIsMenuOpen } from "../../redux/reducers/menuReducer";
import { MobileMenuItem } from "./MobileMenuItem";

export const MobileMenu: React.FC = () => {
  const isMenuOpen = useAppSelector((state) => state.menu.isOpen);
  const dispatch = useAppDispatch();

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)]
                     z-40 flex flex-col items-center justify-center
                     transition-all duration-300 ease-in-out
                     ${
                       isMenuOpen
                         ? "h-screen opacity-100 pointer-events-auto"
                         : "h-0 opacity-0 pointer-events-none"
                     }`}
    >
      <button
        onClick={() => dispatch(setIsMenuOpen(false))}
        className="absolute top-5 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <MobileMenuItem itemName="Home" />
      <MobileMenuItem itemName="About" />
      <MobileMenuItem itemName="Projects" />
      {/* <MobileMenuItem
        itemName="Contact"
      /> */}
      <a
        href="mailto:daniel.erdos87@gmail.com?subject=Inquiry from portfolio site"
        onClick={() => dispatch(setIsMenuOpen(false))}
        className={`text-5xl font-semibold text-white my-4 transform transition-transform duration-300
                    ${
                      isMenuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }`}
      >
        &#9993;
      </a>
    </div>
  );
};
