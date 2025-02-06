import { SetStateAction } from "react";

export const MobileMenuItem: React.FC<MobileMenuItemProps> = ({
  setIsMenuOpen,
  isMenuOpen,
  itemName,
}) => {
  return (
    <a
      href={`#${itemName.toLowerCase()}`}
      onClick={() => setIsMenuOpen(false)}
      className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                    ${
                      isMenuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }`}
    >
      {itemName}
    </a>
  );
};

interface MobileMenuItemProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<SetStateAction<boolean>>;
  itemName: string;
}
