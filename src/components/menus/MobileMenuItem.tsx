import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setIsMenuOpen } from "../../redux/reducers/menuReducer";

export const MobileMenuItem: React.FC<MobileMenuItemProps> = ({ itemName }) => {
  const dispatch = useAppDispatch();
  const isMenuOpen = useAppSelector((state) => state.menu.isOpen);

  return (
    <a
      href={`#${itemName.toLowerCase()}`}
      onClick={() => dispatch(setIsMenuOpen(false))}
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
  itemName: string;
}
