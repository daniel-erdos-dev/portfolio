import { SetStateAction } from "react";
import { MobileMenuItem } from "./MobileMenuItem";

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
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
        onClick={() => setIsMenuOpen(false)}
        className="absolute top-5 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <MobileMenuItem
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        itemName="Home"
      />
      <MobileMenuItem
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        itemName="About"
      />
      <MobileMenuItem
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        itemName="Projects"
      />
      {/* <MobileMenuItem
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        itemName="Contact"
      /> */}
      <a
        href="mailto:daniel.erdos87@gmail.com?subject=Inquiry from portfolio site"
        onClick={() => setIsMenuOpen(false)}
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

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<SetStateAction<boolean>>;
}
